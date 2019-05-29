'use strict';

import  {HadeethService} from '../lib/hadeeth-service';
import  { success, notfound } from '../lib/response';

module.exports.handler = async (event, context, callback) => {

  const hadeethService = new HadeethService(process.env.HADEETH_TABLE);
  const result = await hadeethService.find(event.pathParameters.id);
  if(result.Item) {
    return success(result.Item);
  } else {
    return notfound();
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
