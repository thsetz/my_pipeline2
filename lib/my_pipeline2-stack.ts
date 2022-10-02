import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodeBuildStep, CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';

export class MyPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    
    const muh = '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';

    console.log("Befor Create muuh")
/*    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'MyPipeline',
      synth: new ShellStep('Synth', {
       input: CodePipelineSource.gitHub('thsetz/my_pipeline2', 'master'),
       // input: CodePipelineSource.gitHub('MyConnection', 'master'),
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      })
    });
*/
    // START NEW
    // Set your Github username and repository name
    const branch = 'master';
    const gitHubUsernameRepository = 'thsetz/my_pipeline2';
    const pipeline = new CodePipeline(this, 'Pipeline', {
            pipelineName: "MyCDKPipeline",
            synth: new CodeBuildStep('SynthStep', {
                input: CodePipelineSource.gitHub(gitHubUsernameRepository, branch, {
                       authentication: cdk.SecretValue.secretsManager('github-access-token-secret2'),
//                    authentication: muh,
                }),
                installCommands: [
                    'npm install -g aws-cdk'
                ],
                commands: [
                    'npm ci',
                    'npm run build',
                    'npx cdk synth'
                ]
            })
        });
 

    // FIN NEW

    console.log("After Create muuh")
    
  }
}

