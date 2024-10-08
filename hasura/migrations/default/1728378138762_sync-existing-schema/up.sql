SET check_function_bodies = false;

DO $$
BEGIN
  -- Check if the function already exists
  IF NOT EXISTS (
    SELECT 1 
    FROM pg_proc 
    WHERE proname = 'set_current_timestamp_updated_at'
  ) THEN
    -- Create the function only if it doesn't exist
    CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
    DECLARE
      _new record;
    BEGIN
      _new := NEW;
      _new."updated_at" = NOW();
      RETURN _new;
    END;
    $$;
  END IF;
END $$;

CREATE TABLE public.friend (
    id integer NOT NULL,
    username text,
    password text
);
CREATE SEQUENCE public.friend_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.friend_id_seq OWNED BY public.friend.id;

CREATE TABLE public.pizza (
    id integer NOT NULL,
    title integer NOT NULL,
    original_friend integer NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);
CREATE SEQUENCE public.pizza_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.pizza_id_seq OWNED BY public.pizza.id;

CREATE TABLE public.pizza_order (
    id integer NOT NULL,
    friend_id integer NOT NULL,
    pizza_id integer NOT NULL
);
CREATE SEQUENCE public.pizza_order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.pizza_order_id_seq OWNED BY public.pizza_order.id;

CREATE TABLE public.pizza_topping (
    id integer NOT NULL,
    title text NOT NULL,
    emoji text NOT NULL,
    available boolean DEFAULT true NOT NULL
);
CREATE SEQUENCE public.pizza_topping_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.pizza_topping_id_seq OWNED BY public.pizza_topping.id;

CREATE TABLE public.pizza_topping_pizza (
    id integer NOT NULL,
    pizza_id integer NOT NULL,
    pizza_topping_id integer NOT NULL
);
CREATE SEQUENCE public.pizza_topping_pizza_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.pizza_topping_pizza_id_seq OWNED BY public.pizza_topping_pizza.id;

ALTER TABLE ONLY public.friend ALTER COLUMN id SET DEFAULT nextval('public.friend_id_seq'::regclass);
ALTER TABLE ONLY public.pizza ALTER COLUMN id SET DEFAULT nextval('public.pizza_id_seq'::regclass);
ALTER TABLE ONLY public.pizza_order ALTER COLUMN id SET DEFAULT nextval('public.pizza_order_id_seq'::regclass);
ALTER TABLE ONLY public.pizza_topping ALTER COLUMN id SET DEFAULT nextval('public.pizza_topping_id_seq'::regclass);
ALTER TABLE ONLY public.pizza_topping_pizza ALTER COLUMN id SET DEFAULT nextval('public.pizza_topping_pizza_id_seq'::regclass);

ALTER TABLE ONLY public.friend
    ADD CONSTRAINT friend_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.friend
    ADD CONSTRAINT friend_username_key UNIQUE (username);
ALTER TABLE ONLY public.pizza_order
    ADD CONSTRAINT pizza_order_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.pizza
    ADD CONSTRAINT pizza_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.pizza_topping_pizza
    ADD CONSTRAINT pizza_topping_pizza_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.pizza_topping
    ADD CONSTRAINT pizza_topping_pkey PRIMARY KEY (id);

CREATE TRIGGER set_public_pizza_updated_at BEFORE UPDATE ON public.pizza FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_pizza_updated_at ON public.pizza IS 'trigger to set value of column "updated_at" to current timestamp on row update';

ALTER TABLE ONLY public.pizza_order
    ADD CONSTRAINT friend_pizza_order FOREIGN KEY (friend_id) REFERENCES public.friend(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.pizza_order
    ADD CONSTRAINT pizza_pizza_order FOREIGN KEY (pizza_id) REFERENCES public.pizza(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.pizza_topping_pizza
    ADD CONSTRAINT pizza_pizza_topping_pizza FOREIGN KEY (pizza_id) REFERENCES public.pizza(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.pizza_topping_pizza
    ADD CONSTRAINT pizza_topping_pizza_topping_pizza FOREIGN KEY (pizza_topping_id) REFERENCES public.pizza_topping(id) ON DELETE CASCADE;