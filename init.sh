#!/usr/bin/env bash
set -ex

. set_env.sh
#cdk bootstrap aws://${AWS_ACCOUNT}/${AWS_REGION} --profile ADMIN-PROFILE \
cdk bootstrap aws://${AWS_ACCOUNT}/${AWS_REGION} \
    --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess 

#    --trust ${AWS_ACCOUNT}

# cdk bootstrap "aws://928141648496/eu-west-1"


