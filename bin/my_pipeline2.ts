#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MyPipelineStack } from '../lib/my_pipeline2-stack';

const app = new cdk.App();
console.log("Before Stack")
new MyPipelineStack(app, 'MyPipelineStack', {
  env: {
    account: '928141648496',
    region: 'eu-central-1',
  }
});
console.log("After Stack2 ")

app.synth();

