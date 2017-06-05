export const selectTodaysChallenge = `SELECT 
  users_activity.user_id, 
  users_activity.commitment_id, 
  users_activity.duration_days,
  commitments.description, 
  commitments.quote_id, 
  quotes.author, 
  quotes.quote,
  users_activity.status,
  true as is_todays,
  0 as ordering
FROM 
  public.users_activity, 
  public.commitments, 
  public.quotes
WHERE
  users_activity.user_id=$/user_id/ AND
  users_activity.commitment_id = commitments.id AND
  commitments.quote_id = quotes.id AND 
  users_activity.status < 2 AND
  users_activity.day = CURRENT_DATE

UNION

SELECT 
  users_commitments.user_id, 
  users_commitments.commitment_id, 
  users_commitments.duration_days,
  commitments.description, 
  commitments.quote_id, 
  quotes.author, 
  quotes.quote,
  0,
  false,
  1+random()
FROM 
  public.users_commitments, 
  public.commitments, 
  public.quotes
WHERE 
  users_commitments.user_id=$/user_id/ AND
  users_commitments.commitment_id = commitments.id AND
  commitments.quote_id = quotes.id AND
  users_commitments.commitment_id NOT IN
  (SELECT 
	   users_activity.commitment_id
	 FROM 
	   public.users_activity
	 WHERE
	   users_activity.user_id=1 AND
	   users_activity.day = CURRENT_DATE
   )

UNION

SELECT 
  users_activity.user_id, 
  users_activity.commitment_id, 
  users_activity.duration_days,
  commitments.description, 
  commitments.quote_id, 
  quotes.author, 
  quotes.quote,
  users_activity.status,
  true as is_todays,
  3 as ordering
FROM 
  public.users_activity, 
  public.commitments, 
  public.quotes
WHERE
  users_activity.user_id=$/user_id/ AND
  users_activity.commitment_id = commitments.id AND
  commitments.quote_id = quotes.id AND 
  users_activity.status = 2 AND
  users_activity.day = CURRENT_DATE

ORDER BY
  ordering 
LIMIT 1;`;

export const insertTodaysChallenge = `INSERT INTO users_activity (
  user_id, 
  commitment_id, 
  day, 
  status, 
  duration_days)
VALUES (
  $/user_id/,
  $/commitment_id/, 
  CURRENT_DATE, 
  0, 
  $/duration_days/);`;

export const updateTodaysChallenge = `UPDATE users_activity
SET 
  status = $/status/
WHERE 
  user_id=$/user_id/ AND
  commitment_id = $/commitment_id/ AND
  day = CURRENT_DATE;`;