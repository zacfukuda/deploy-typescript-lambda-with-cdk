import { Stack } from 'aws-cdk-lib';
import { Architecture, Code, LayerVersion, Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import type { StackProps } from 'aws-cdk-lib';

export class DeployTypescriptLambdaWithCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // 01
    new NodejsFunction(this, 'Independent', {
      functionName: 'independent',
      code: Code.fromAsset('./lambda/01-independent/build'),
      handler: 'index.handler',
      architecture: Architecture.ARM_64,
      runtime: Runtime.NODEJS_24_X,
    });

    // 02
    new NodejsFunction(this, 'AwsDependent', {
      functionName: 'aws-dependent',
      code: Code.fromAsset('./lambda/02-aws-dependent/build'),
      handler: 'index.handler',
      architecture: Architecture.ARM_64,
      runtime: Runtime.NODEJS_24_X,
    });

    // 03
    new NodejsFunction(this, 'NpmDependent', {
      functionName: 'npm-dependent',
      code: Code.fromAsset('./lambda/03-npm-dependent/build'),
      handler: 'index.handler',
      architecture: Architecture.ARM_64,
      runtime: Runtime.NODEJS_24_X,
    });

    // 04
    const layer = new LayerVersion(this, 'Layer', {
      layerVersionName: 'layer',
      compatibleRuntimes: [Runtime.NODEJS_24_X],
      compatibleArchitectures: [Architecture.ARM_64],
      code: Code.fromAsset('./lambda/04-layer/build'),
    });

    // 05
    new NodejsFunction(this, 'LayerDependent', {
      functionName: 'layer-dependent',
      code: Code.fromAsset('./lambda/05-layer-dependent/build'),
      handler: 'index.handler',
      architecture: Architecture.ARM_64,
      runtime: Runtime.NODEJS_24_X,
      layers: [layer],
    });
  }
}
