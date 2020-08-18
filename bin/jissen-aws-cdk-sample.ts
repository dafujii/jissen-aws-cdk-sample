#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { JissenAwsCdkSampleStack } from '../lib/jissen-aws-cdk-sample-stack';

const app = new cdk.App();
new JissenAwsCdkSampleStack(app, 'JissenAwsCdkSampleStack');
