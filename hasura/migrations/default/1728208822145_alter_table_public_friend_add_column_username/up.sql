DO $$ 
BEGIN
  -- Check if the column "username" already exists in the "friend" table
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_name = 'friend' 
    AND column_name = 'username'
  ) THEN
    -- Add the "username" column only if it doesn't exist
    ALTER TABLE "public"."friend" 
    ADD COLUMN "username" text NULL UNIQUE;
  END IF;

  -- Check if the column "password" already exists in the "friend" table
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_name = 'friend' 
    AND column_name = 'password'
  ) THEN
    -- Add the "password" column only if it doesn't exist
    ALTER TABLE "public"."friend" 
    ADD COLUMN "password" text NULL;
  END IF;
END $$;