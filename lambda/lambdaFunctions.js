import AWS from "aws-sdk";

AWS.config.update({
	region: process.env.AWS_REGION,
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// const invokeLambdaFunction = (functionName, payload) => {
// 	const lambda = new AWS.Lambda();
// 	const params = {
// 		FunctionName: functionName,
// 		Payload: JSON.stringify(payload),
// 	};
// 	return lambda.invoke(params).promise();
// };
