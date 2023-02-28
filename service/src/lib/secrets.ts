import fs from 'fs';

/**
 * Helper function to load environment variables in local
 * development mode or docker secrets in production.
 * 
 * @author Maxime Nadeau
 */
export default function getSecret (secretName: string): string | undefined {
  const env = process.env.NODE_ENV;
  
  if (env === "development") {
    return process.env[secretName];
  }

  try {
    let result = fs.readFileSync(`/run/secrets/${secretName}`, 'utf8').replace(/(\r\n|\n|\r)/gm, '');
    return result;
  } catch(err: any) {
    if (err.code !== 'ENOENT') {
      console.log(`An error occurred while trying to read the secret: ${secretName}. Err: ${err}`);
    } else {
      console.log(`Could not find the secret, probably not running in swarm mode: ${secretName}. Err: ${err}`);
    }
    return "";
  }
}