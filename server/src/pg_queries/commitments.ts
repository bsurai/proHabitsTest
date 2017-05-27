export const queryTodaysChallenge = `SELECT 
  users_activity.user_id, 
  users_activity.commitment_id, 
  commitments.description, 
  commitments.quote_id, 
  quotes.author, 
  quotes.quote,
  users_activity.status
FROM 
  public.users_activity, 
  public.commitments, 
  public.quotes
WHERE
  users_activity.user_id=$/user_id/ AND
  users_activity.commitment_id = commitments.id AND
  commitments.quote_id = quotes.id 

UNION

SELECT 
  users_commitments.user_id, 
  users_commitments.commitment_id, 
  commitments.description, 
  commitments.quote_id, 
  quotes.author, 
  quotes.quote,
  0
FROM 
  public.users_commitments, 
  public.commitments, 
  public.quotes
WHERE 
  users_commitments.user_id=$/user_id/ AND
  users_commitments.commitment_id = commitments.id AND
  commitments.quote_id = quotes.id
 LIMIT 1;
`;