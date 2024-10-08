import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export type FriendOutput = {
  __typename?: 'FriendOutput';
  id?: Maybe<Scalars['Int']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "friend" */
export type Friend = {
  __typename?: 'friend';
  id: Scalars['Int']['output'];
  password?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  pizza_orders: Array<Pizza_Order>;
  /** An aggregate relationship */
  pizza_orders_aggregate: Pizza_Order_Aggregate;
  username?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "friend" */
export type FriendPizza_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pizza_Order_Order_By>>;
  where?: InputMaybe<Pizza_Order_Bool_Exp>;
};


/** columns and relationships of "friend" */
export type FriendPizza_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pizza_Order_Order_By>>;
  where?: InputMaybe<Pizza_Order_Bool_Exp>;
};

/** aggregated selection of "friend" */
export type Friend_Aggregate = {
  __typename?: 'friend_aggregate';
  aggregate?: Maybe<Friend_Aggregate_Fields>;
  nodes: Array<Friend>;
};

/** aggregate fields of "friend" */
export type Friend_Aggregate_Fields = {
  __typename?: 'friend_aggregate_fields';
  avg?: Maybe<Friend_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Friend_Max_Fields>;
  min?: Maybe<Friend_Min_Fields>;
  stddev?: Maybe<Friend_Stddev_Fields>;
  stddev_pop?: Maybe<Friend_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Friend_Stddev_Samp_Fields>;
  sum?: Maybe<Friend_Sum_Fields>;
  var_pop?: Maybe<Friend_Var_Pop_Fields>;
  var_samp?: Maybe<Friend_Var_Samp_Fields>;
  variance?: Maybe<Friend_Variance_Fields>;
};


/** aggregate fields of "friend" */
export type Friend_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Friend_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Friend_Avg_Fields = {
  __typename?: 'friend_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "friend". All fields are combined with a logical 'AND'. */
export type Friend_Bool_Exp = {
  _and?: InputMaybe<Array<Friend_Bool_Exp>>;
  _not?: InputMaybe<Friend_Bool_Exp>;
  _or?: InputMaybe<Array<Friend_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  pizza_orders?: InputMaybe<Pizza_Order_Bool_Exp>;
  pizza_orders_aggregate?: InputMaybe<Pizza_Order_Aggregate_Bool_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "friend" */
export enum Friend_Constraint {
  /** unique or primary key constraint on columns "id" */
  FriendPkey = 'friend_pkey',
  /** unique or primary key constraint on columns "username" */
  FriendUsernameKey = 'friend_username_key'
}

/** input type for incrementing numeric columns in table "friend" */
export type Friend_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "friend" */
export type Friend_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  pizza_orders?: InputMaybe<Pizza_Order_Arr_Rel_Insert_Input>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Friend_Max_Fields = {
  __typename?: 'friend_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Friend_Min_Fields = {
  __typename?: 'friend_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "friend" */
export type Friend_Mutation_Response = {
  __typename?: 'friend_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Friend>;
};

/** input type for inserting object relation for remote table "friend" */
export type Friend_Obj_Rel_Insert_Input = {
  data: Friend_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Friend_On_Conflict>;
};

/** on_conflict condition type for table "friend" */
export type Friend_On_Conflict = {
  constraint: Friend_Constraint;
  update_columns?: Array<Friend_Update_Column>;
  where?: InputMaybe<Friend_Bool_Exp>;
};

/** Ordering options when selecting data from "friend". */
export type Friend_Order_By = {
  id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  pizza_orders_aggregate?: InputMaybe<Pizza_Order_Aggregate_Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: friend */
export type Friend_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "friend" */
export enum Friend_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "friend" */
export type Friend_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Friend_Stddev_Fields = {
  __typename?: 'friend_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Friend_Stddev_Pop_Fields = {
  __typename?: 'friend_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Friend_Stddev_Samp_Fields = {
  __typename?: 'friend_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "friend" */
export type Friend_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Friend_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Friend_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Friend_Sum_Fields = {
  __typename?: 'friend_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "friend" */
export enum Friend_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username'
}

export type Friend_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Friend_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Friend_Set_Input>;
  /** filter the rows which have to be updated */
  where: Friend_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Friend_Var_Pop_Fields = {
  __typename?: 'friend_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Friend_Var_Samp_Fields = {
  __typename?: 'friend_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Friend_Variance_Fields = {
  __typename?: 'friend_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "friend" */
  delete_friend?: Maybe<Friend_Mutation_Response>;
  /** delete single row from the table: "friend" */
  delete_friend_by_pk?: Maybe<Friend>;
  /** delete data from the table: "pizza" */
  delete_pizza?: Maybe<Pizza_Mutation_Response>;
  /** delete single row from the table: "pizza" */
  delete_pizza_by_pk?: Maybe<Pizza>;
  /** delete data from the table: "pizza_order" */
  delete_pizza_order?: Maybe<Pizza_Order_Mutation_Response>;
  /** delete single row from the table: "pizza_order" */
  delete_pizza_order_by_pk?: Maybe<Pizza_Order>;
  /** delete data from the table: "pizza_topping" */
  delete_pizza_topping?: Maybe<Pizza_Topping_Mutation_Response>;
  /** delete single row from the table: "pizza_topping" */
  delete_pizza_topping_by_pk?: Maybe<Pizza_Topping>;
  /** delete data from the table: "pizza_topping_pizza" */
  delete_pizza_topping_pizza?: Maybe<Pizza_Topping_Pizza_Mutation_Response>;
  /** delete single row from the table: "pizza_topping_pizza" */
  delete_pizza_topping_pizza_by_pk?: Maybe<Pizza_Topping_Pizza>;
  /** insert data into the table: "friend" */
  insert_friend?: Maybe<Friend_Mutation_Response>;
  /** insert a single row into the table: "friend" */
  insert_friend_one?: Maybe<Friend>;
  /** insert data into the table: "pizza" */
  insert_pizza?: Maybe<Pizza_Mutation_Response>;
  /** insert a single row into the table: "pizza" */
  insert_pizza_one?: Maybe<Pizza>;
  /** insert data into the table: "pizza_order" */
  insert_pizza_order?: Maybe<Pizza_Order_Mutation_Response>;
  /** insert a single row into the table: "pizza_order" */
  insert_pizza_order_one?: Maybe<Pizza_Order>;
  /** insert data into the table: "pizza_topping" */
  insert_pizza_topping?: Maybe<Pizza_Topping_Mutation_Response>;
  /** insert a single row into the table: "pizza_topping" */
  insert_pizza_topping_one?: Maybe<Pizza_Topping>;
  /** insert data into the table: "pizza_topping_pizza" */
  insert_pizza_topping_pizza?: Maybe<Pizza_Topping_Pizza_Mutation_Response>;
  /** insert a single row into the table: "pizza_topping_pizza" */
  insert_pizza_topping_pizza_one?: Maybe<Pizza_Topping_Pizza>;
  login?: Maybe<FriendOutput>;
  signup?: Maybe<FriendOutput>;
  /** update data of the table: "friend" */
  update_friend?: Maybe<Friend_Mutation_Response>;
  /** update single row of the table: "friend" */
  update_friend_by_pk?: Maybe<Friend>;
  /** update multiples rows of table: "friend" */
  update_friend_many?: Maybe<Array<Maybe<Friend_Mutation_Response>>>;
  /** update data of the table: "pizza" */
  update_pizza?: Maybe<Pizza_Mutation_Response>;
  /** update single row of the table: "pizza" */
  update_pizza_by_pk?: Maybe<Pizza>;
  /** update multiples rows of table: "pizza" */
  update_pizza_many?: Maybe<Array<Maybe<Pizza_Mutation_Response>>>;
  /** update data of the table: "pizza_order" */
  update_pizza_order?: Maybe<Pizza_Order_Mutation_Response>;
  /** update single row of the table: "pizza_order" */
  update_pizza_order_by_pk?: Maybe<Pizza_Order>;
  /** update multiples rows of table: "pizza_order" */
  update_pizza_order_many?: Maybe<Array<Maybe<Pizza_Order_Mutation_Response>>>;
  /** update data of the table: "pizza_topping" */
  update_pizza_topping?: Maybe<Pizza_Topping_Mutation_Response>;
  /** update single row of the table: "pizza_topping" */
  update_pizza_topping_by_pk?: Maybe<Pizza_Topping>;
  /** update multiples rows of table: "pizza_topping" */
  update_pizza_topping_many?: Maybe<Array<Maybe<Pizza_Topping_Mutation_Response>>>;
  /** update data of the table: "pizza_topping_pizza" */
  update_pizza_topping_pizza?: Maybe<Pizza_Topping_Pizza_Mutation_Response>;
  /** update single row of the table: "pizza_topping_pizza" */
  update_pizza_topping_pizza_by_pk?: Maybe<Pizza_Topping_Pizza>;
  /** update multiples rows of table: "pizza_topping_pizza" */
  update_pizza_topping_pizza_many?: Maybe<Array<Maybe<Pizza_Topping_Pizza_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_FriendArgs = {
  where: Friend_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Friend_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PizzaArgs = {
  where: Pizza_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pizza_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Pizza_OrderArgs = {
  where: Pizza_Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pizza_Order_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Pizza_ToppingArgs = {
  where: Pizza_Topping_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pizza_Topping_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Pizza_Topping_PizzaArgs = {
  where: Pizza_Topping_Pizza_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pizza_Topping_Pizza_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_FriendArgs = {
  objects: Array<Friend_Insert_Input>;
  on_conflict?: InputMaybe<Friend_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Friend_OneArgs = {
  object: Friend_Insert_Input;
  on_conflict?: InputMaybe<Friend_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PizzaArgs = {
  objects: Array<Pizza_Insert_Input>;
  on_conflict?: InputMaybe<Pizza_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pizza_OneArgs = {
  object: Pizza_Insert_Input;
  on_conflict?: InputMaybe<Pizza_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pizza_OrderArgs = {
  objects: Array<Pizza_Order_Insert_Input>;
  on_conflict?: InputMaybe<Pizza_Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pizza_Order_OneArgs = {
  object: Pizza_Order_Insert_Input;
  on_conflict?: InputMaybe<Pizza_Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pizza_ToppingArgs = {
  objects: Array<Pizza_Topping_Insert_Input>;
  on_conflict?: InputMaybe<Pizza_Topping_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pizza_Topping_OneArgs = {
  object: Pizza_Topping_Insert_Input;
  on_conflict?: InputMaybe<Pizza_Topping_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pizza_Topping_PizzaArgs = {
  objects: Array<Pizza_Topping_Pizza_Insert_Input>;
  on_conflict?: InputMaybe<Pizza_Topping_Pizza_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pizza_Topping_Pizza_OneArgs = {
  object: Pizza_Topping_Pizza_Insert_Input;
  on_conflict?: InputMaybe<Pizza_Topping_Pizza_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootSignupArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootUpdate_FriendArgs = {
  _inc?: InputMaybe<Friend_Inc_Input>;
  _set?: InputMaybe<Friend_Set_Input>;
  where: Friend_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Friend_By_PkArgs = {
  _inc?: InputMaybe<Friend_Inc_Input>;
  _set?: InputMaybe<Friend_Set_Input>;
  pk_columns: Friend_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Friend_ManyArgs = {
  updates: Array<Friend_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PizzaArgs = {
  _inc?: InputMaybe<Pizza_Inc_Input>;
  _set?: InputMaybe<Pizza_Set_Input>;
  where: Pizza_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pizza_By_PkArgs = {
  _inc?: InputMaybe<Pizza_Inc_Input>;
  _set?: InputMaybe<Pizza_Set_Input>;
  pk_columns: Pizza_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Pizza_ManyArgs = {
  updates: Array<Pizza_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Pizza_OrderArgs = {
  _inc?: InputMaybe<Pizza_Order_Inc_Input>;
  _set?: InputMaybe<Pizza_Order_Set_Input>;
  where: Pizza_Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pizza_Order_By_PkArgs = {
  _inc?: InputMaybe<Pizza_Order_Inc_Input>;
  _set?: InputMaybe<Pizza_Order_Set_Input>;
  pk_columns: Pizza_Order_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Pizza_Order_ManyArgs = {
  updates: Array<Pizza_Order_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Pizza_ToppingArgs = {
  _inc?: InputMaybe<Pizza_Topping_Inc_Input>;
  _set?: InputMaybe<Pizza_Topping_Set_Input>;
  where: Pizza_Topping_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pizza_Topping_By_PkArgs = {
  _inc?: InputMaybe<Pizza_Topping_Inc_Input>;
  _set?: InputMaybe<Pizza_Topping_Set_Input>;
  pk_columns: Pizza_Topping_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Pizza_Topping_ManyArgs = {
  updates: Array<Pizza_Topping_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Pizza_Topping_PizzaArgs = {
  _inc?: InputMaybe<Pizza_Topping_Pizza_Inc_Input>;
  _set?: InputMaybe<Pizza_Topping_Pizza_Set_Input>;
  where: Pizza_Topping_Pizza_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pizza_Topping_Pizza_By_PkArgs = {
  _inc?: InputMaybe<Pizza_Topping_Pizza_Inc_Input>;
  _set?: InputMaybe<Pizza_Topping_Pizza_Set_Input>;
  pk_columns: Pizza_Topping_Pizza_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Pizza_Topping_Pizza_ManyArgs = {
  updates: Array<Pizza_Topping_Pizza_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "pizza" */
export type Pizza = {
  __typename?: 'pizza';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['Int']['output'];
  original_friend: Scalars['Int']['output'];
  /** An array relationship */
  pizza_orders: Array<Pizza_Order>;
  /** An aggregate relationship */
  pizza_orders_aggregate: Pizza_Order_Aggregate;
  /** An array relationship */
  pizza_topping_pizzas: Array<Pizza_Topping_Pizza>;
  /** An aggregate relationship */
  pizza_topping_pizzas_aggregate: Pizza_Topping_Pizza_Aggregate;
  title: Scalars['Int']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};


/** columns and relationships of "pizza" */
export type PizzaPizza_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pizza_Order_Order_By>>;
  where?: InputMaybe<Pizza_Order_Bool_Exp>;
};


/** columns and relationships of "pizza" */
export type PizzaPizza_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pizza_Order_Order_By>>;
  where?: InputMaybe<Pizza_Order_Bool_Exp>;
};


/** columns and relationships of "pizza" */
export type PizzaPizza_Topping_PizzasArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Topping_Pizza_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pizza_Topping_Pizza_Order_By>>;
  where?: InputMaybe<Pizza_Topping_Pizza_Bool_Exp>;
};


/** columns and relationships of "pizza" */
export type PizzaPizza_Topping_Pizzas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Topping_Pizza_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pizza_Topping_Pizza_Order_By>>;
  where?: InputMaybe<Pizza_Topping_Pizza_Bool_Exp>;
};

/** aggregated selection of "pizza" */
export type Pizza_Aggregate = {
  __typename?: 'pizza_aggregate';
  aggregate?: Maybe<Pizza_Aggregate_Fields>;
  nodes: Array<Pizza>;
};

/** aggregate fields of "pizza" */
export type Pizza_Aggregate_Fields = {
  __typename?: 'pizza_aggregate_fields';
  avg?: Maybe<Pizza_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Pizza_Max_Fields>;
  min?: Maybe<Pizza_Min_Fields>;
  stddev?: Maybe<Pizza_Stddev_Fields>;
  stddev_pop?: Maybe<Pizza_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pizza_Stddev_Samp_Fields>;
  sum?: Maybe<Pizza_Sum_Fields>;
  var_pop?: Maybe<Pizza_Var_Pop_Fields>;
  var_samp?: Maybe<Pizza_Var_Samp_Fields>;
  variance?: Maybe<Pizza_Variance_Fields>;
};


/** aggregate fields of "pizza" */
export type Pizza_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pizza_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Pizza_Avg_Fields = {
  __typename?: 'pizza_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  original_friend?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "pizza". All fields are combined with a logical 'AND'. */
export type Pizza_Bool_Exp = {
  _and?: InputMaybe<Array<Pizza_Bool_Exp>>;
  _not?: InputMaybe<Pizza_Bool_Exp>;
  _or?: InputMaybe<Array<Pizza_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  original_friend?: InputMaybe<Int_Comparison_Exp>;
  pizza_orders?: InputMaybe<Pizza_Order_Bool_Exp>;
  pizza_orders_aggregate?: InputMaybe<Pizza_Order_Aggregate_Bool_Exp>;
  pizza_topping_pizzas?: InputMaybe<Pizza_Topping_Pizza_Bool_Exp>;
  pizza_topping_pizzas_aggregate?: InputMaybe<Pizza_Topping_Pizza_Aggregate_Bool_Exp>;
  title?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "pizza" */
export enum Pizza_Constraint {
  /** unique or primary key constraint on columns "id" */
  PizzaPkey = 'pizza_pkey'
}

/** input type for incrementing numeric columns in table "pizza" */
export type Pizza_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  original_friend?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "pizza" */
export type Pizza_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  original_friend?: InputMaybe<Scalars['Int']['input']>;
  pizza_orders?: InputMaybe<Pizza_Order_Arr_Rel_Insert_Input>;
  pizza_topping_pizzas?: InputMaybe<Pizza_Topping_Pizza_Arr_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Pizza_Max_Fields = {
  __typename?: 'pizza_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  original_friend?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Pizza_Min_Fields = {
  __typename?: 'pizza_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  original_friend?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "pizza" */
export type Pizza_Mutation_Response = {
  __typename?: 'pizza_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Pizza>;
};

/** input type for inserting object relation for remote table "pizza" */
export type Pizza_Obj_Rel_Insert_Input = {
  data: Pizza_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Pizza_On_Conflict>;
};

/** on_conflict condition type for table "pizza" */
export type Pizza_On_Conflict = {
  constraint: Pizza_Constraint;
  update_columns?: Array<Pizza_Update_Column>;
  where?: InputMaybe<Pizza_Bool_Exp>;
};

/** columns and relationships of "pizza_order" */
export type Pizza_Order = {
  __typename?: 'pizza_order';
  /** An object relationship */
  friend: Friend;
  friend_id: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  pizza: Pizza;
  pizza_id: Scalars['Int']['output'];
};

/** aggregated selection of "pizza_order" */
export type Pizza_Order_Aggregate = {
  __typename?: 'pizza_order_aggregate';
  aggregate?: Maybe<Pizza_Order_Aggregate_Fields>;
  nodes: Array<Pizza_Order>;
};

export type Pizza_Order_Aggregate_Bool_Exp = {
  count?: InputMaybe<Pizza_Order_Aggregate_Bool_Exp_Count>;
};

export type Pizza_Order_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Pizza_Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Pizza_Order_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "pizza_order" */
export type Pizza_Order_Aggregate_Fields = {
  __typename?: 'pizza_order_aggregate_fields';
  avg?: Maybe<Pizza_Order_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Pizza_Order_Max_Fields>;
  min?: Maybe<Pizza_Order_Min_Fields>;
  stddev?: Maybe<Pizza_Order_Stddev_Fields>;
  stddev_pop?: Maybe<Pizza_Order_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pizza_Order_Stddev_Samp_Fields>;
  sum?: Maybe<Pizza_Order_Sum_Fields>;
  var_pop?: Maybe<Pizza_Order_Var_Pop_Fields>;
  var_samp?: Maybe<Pizza_Order_Var_Samp_Fields>;
  variance?: Maybe<Pizza_Order_Variance_Fields>;
};


/** aggregate fields of "pizza_order" */
export type Pizza_Order_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pizza_Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "pizza_order" */
export type Pizza_Order_Aggregate_Order_By = {
  avg?: InputMaybe<Pizza_Order_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Pizza_Order_Max_Order_By>;
  min?: InputMaybe<Pizza_Order_Min_Order_By>;
  stddev?: InputMaybe<Pizza_Order_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Pizza_Order_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Pizza_Order_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Pizza_Order_Sum_Order_By>;
  var_pop?: InputMaybe<Pizza_Order_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Pizza_Order_Var_Samp_Order_By>;
  variance?: InputMaybe<Pizza_Order_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "pizza_order" */
export type Pizza_Order_Arr_Rel_Insert_Input = {
  data: Array<Pizza_Order_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Pizza_Order_On_Conflict>;
};

/** aggregate avg on columns */
export type Pizza_Order_Avg_Fields = {
  __typename?: 'pizza_order_avg_fields';
  friend_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  pizza_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "pizza_order" */
export type Pizza_Order_Avg_Order_By = {
  friend_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "pizza_order". All fields are combined with a logical 'AND'. */
export type Pizza_Order_Bool_Exp = {
  _and?: InputMaybe<Array<Pizza_Order_Bool_Exp>>;
  _not?: InputMaybe<Pizza_Order_Bool_Exp>;
  _or?: InputMaybe<Array<Pizza_Order_Bool_Exp>>;
  friend?: InputMaybe<Friend_Bool_Exp>;
  friend_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  pizza?: InputMaybe<Pizza_Bool_Exp>;
  pizza_id?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "pizza". */
export type Pizza_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_friend?: InputMaybe<Order_By>;
  pizza_orders_aggregate?: InputMaybe<Pizza_Order_Aggregate_Order_By>;
  pizza_topping_pizzas_aggregate?: InputMaybe<Pizza_Topping_Pizza_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** unique or primary key constraints on table "pizza_order" */
export enum Pizza_Order_Constraint {
  /** unique or primary key constraint on columns "id" */
  PizzaOrderPkey = 'pizza_order_pkey'
}

/** input type for incrementing numeric columns in table "pizza_order" */
export type Pizza_Order_Inc_Input = {
  friend_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  pizza_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "pizza_order" */
export type Pizza_Order_Insert_Input = {
  friend?: InputMaybe<Friend_Obj_Rel_Insert_Input>;
  friend_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  pizza?: InputMaybe<Pizza_Obj_Rel_Insert_Input>;
  pizza_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Pizza_Order_Max_Fields = {
  __typename?: 'pizza_order_max_fields';
  friend_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  pizza_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "pizza_order" */
export type Pizza_Order_Max_Order_By = {
  friend_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Pizza_Order_Min_Fields = {
  __typename?: 'pizza_order_min_fields';
  friend_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  pizza_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "pizza_order" */
export type Pizza_Order_Min_Order_By = {
  friend_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "pizza_order" */
export type Pizza_Order_Mutation_Response = {
  __typename?: 'pizza_order_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Pizza_Order>;
};

/** on_conflict condition type for table "pizza_order" */
export type Pizza_Order_On_Conflict = {
  constraint: Pizza_Order_Constraint;
  update_columns?: Array<Pizza_Order_Update_Column>;
  where?: InputMaybe<Pizza_Order_Bool_Exp>;
};

/** Ordering options when selecting data from "pizza_order". */
export type Pizza_Order_Order_By = {
  friend?: InputMaybe<Friend_Order_By>;
  friend_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pizza?: InputMaybe<Pizza_Order_By>;
  pizza_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: pizza_order */
export type Pizza_Order_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "pizza_order" */
export enum Pizza_Order_Select_Column {
  /** column name */
  FriendId = 'friend_id',
  /** column name */
  Id = 'id',
  /** column name */
  PizzaId = 'pizza_id'
}

/** input type for updating data in table "pizza_order" */
export type Pizza_Order_Set_Input = {
  friend_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  pizza_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Pizza_Order_Stddev_Fields = {
  __typename?: 'pizza_order_stddev_fields';
  friend_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  pizza_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "pizza_order" */
export type Pizza_Order_Stddev_Order_By = {
  friend_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Pizza_Order_Stddev_Pop_Fields = {
  __typename?: 'pizza_order_stddev_pop_fields';
  friend_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  pizza_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "pizza_order" */
export type Pizza_Order_Stddev_Pop_Order_By = {
  friend_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Pizza_Order_Stddev_Samp_Fields = {
  __typename?: 'pizza_order_stddev_samp_fields';
  friend_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  pizza_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "pizza_order" */
export type Pizza_Order_Stddev_Samp_Order_By = {
  friend_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "pizza_order" */
export type Pizza_Order_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pizza_Order_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pizza_Order_Stream_Cursor_Value_Input = {
  friend_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  pizza_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Pizza_Order_Sum_Fields = {
  __typename?: 'pizza_order_sum_fields';
  friend_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  pizza_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "pizza_order" */
export type Pizza_Order_Sum_Order_By = {
  friend_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
};

/** update columns of table "pizza_order" */
export enum Pizza_Order_Update_Column {
  /** column name */
  FriendId = 'friend_id',
  /** column name */
  Id = 'id',
  /** column name */
  PizzaId = 'pizza_id'
}

export type Pizza_Order_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Pizza_Order_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Pizza_Order_Set_Input>;
  /** filter the rows which have to be updated */
  where: Pizza_Order_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Pizza_Order_Var_Pop_Fields = {
  __typename?: 'pizza_order_var_pop_fields';
  friend_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  pizza_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "pizza_order" */
export type Pizza_Order_Var_Pop_Order_By = {
  friend_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Pizza_Order_Var_Samp_Fields = {
  __typename?: 'pizza_order_var_samp_fields';
  friend_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  pizza_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "pizza_order" */
export type Pizza_Order_Var_Samp_Order_By = {
  friend_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Pizza_Order_Variance_Fields = {
  __typename?: 'pizza_order_variance_fields';
  friend_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  pizza_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "pizza_order" */
export type Pizza_Order_Variance_Order_By = {
  friend_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: pizza */
export type Pizza_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "pizza" */
export enum Pizza_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OriginalFriend = 'original_friend',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "pizza" */
export type Pizza_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  original_friend?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Pizza_Stddev_Fields = {
  __typename?: 'pizza_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  original_friend?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Pizza_Stddev_Pop_Fields = {
  __typename?: 'pizza_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  original_friend?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Pizza_Stddev_Samp_Fields = {
  __typename?: 'pizza_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  original_friend?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "pizza" */
export type Pizza_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pizza_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pizza_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  original_friend?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Pizza_Sum_Fields = {
  __typename?: 'pizza_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  original_friend?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

/** columns and relationships of "pizza_topping" */
export type Pizza_Topping = {
  __typename?: 'pizza_topping';
  available: Scalars['Boolean']['output'];
  emoji: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  /** An array relationship */
  pizza_topping_pizzas: Array<Pizza_Topping_Pizza>;
  /** An aggregate relationship */
  pizza_topping_pizzas_aggregate: Pizza_Topping_Pizza_Aggregate;
  title: Scalars['String']['output'];
};


/** columns and relationships of "pizza_topping" */
export type Pizza_ToppingPizza_Topping_PizzasArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Topping_Pizza_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pizza_Topping_Pizza_Order_By>>;
  where?: InputMaybe<Pizza_Topping_Pizza_Bool_Exp>;
};


/** columns and relationships of "pizza_topping" */
export type Pizza_ToppingPizza_Topping_Pizzas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Topping_Pizza_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pizza_Topping_Pizza_Order_By>>;
  where?: InputMaybe<Pizza_Topping_Pizza_Bool_Exp>;
};

/** aggregated selection of "pizza_topping" */
export type Pizza_Topping_Aggregate = {
  __typename?: 'pizza_topping_aggregate';
  aggregate?: Maybe<Pizza_Topping_Aggregate_Fields>;
  nodes: Array<Pizza_Topping>;
};

/** aggregate fields of "pizza_topping" */
export type Pizza_Topping_Aggregate_Fields = {
  __typename?: 'pizza_topping_aggregate_fields';
  avg?: Maybe<Pizza_Topping_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Pizza_Topping_Max_Fields>;
  min?: Maybe<Pizza_Topping_Min_Fields>;
  stddev?: Maybe<Pizza_Topping_Stddev_Fields>;
  stddev_pop?: Maybe<Pizza_Topping_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pizza_Topping_Stddev_Samp_Fields>;
  sum?: Maybe<Pizza_Topping_Sum_Fields>;
  var_pop?: Maybe<Pizza_Topping_Var_Pop_Fields>;
  var_samp?: Maybe<Pizza_Topping_Var_Samp_Fields>;
  variance?: Maybe<Pizza_Topping_Variance_Fields>;
};


/** aggregate fields of "pizza_topping" */
export type Pizza_Topping_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pizza_Topping_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Pizza_Topping_Avg_Fields = {
  __typename?: 'pizza_topping_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "pizza_topping". All fields are combined with a logical 'AND'. */
export type Pizza_Topping_Bool_Exp = {
  _and?: InputMaybe<Array<Pizza_Topping_Bool_Exp>>;
  _not?: InputMaybe<Pizza_Topping_Bool_Exp>;
  _or?: InputMaybe<Array<Pizza_Topping_Bool_Exp>>;
  available?: InputMaybe<Boolean_Comparison_Exp>;
  emoji?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  pizza_topping_pizzas?: InputMaybe<Pizza_Topping_Pizza_Bool_Exp>;
  pizza_topping_pizzas_aggregate?: InputMaybe<Pizza_Topping_Pizza_Aggregate_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "pizza_topping" */
export enum Pizza_Topping_Constraint {
  /** unique or primary key constraint on columns "id" */
  PizzaToppingPkey = 'pizza_topping_pkey'
}

/** input type for incrementing numeric columns in table "pizza_topping" */
export type Pizza_Topping_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "pizza_topping" */
export type Pizza_Topping_Insert_Input = {
  available?: InputMaybe<Scalars['Boolean']['input']>;
  emoji?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  pizza_topping_pizzas?: InputMaybe<Pizza_Topping_Pizza_Arr_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Pizza_Topping_Max_Fields = {
  __typename?: 'pizza_topping_max_fields';
  emoji?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Pizza_Topping_Min_Fields = {
  __typename?: 'pizza_topping_min_fields';
  emoji?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "pizza_topping" */
export type Pizza_Topping_Mutation_Response = {
  __typename?: 'pizza_topping_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Pizza_Topping>;
};

/** input type for inserting object relation for remote table "pizza_topping" */
export type Pizza_Topping_Obj_Rel_Insert_Input = {
  data: Pizza_Topping_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Pizza_Topping_On_Conflict>;
};

/** on_conflict condition type for table "pizza_topping" */
export type Pizza_Topping_On_Conflict = {
  constraint: Pizza_Topping_Constraint;
  update_columns?: Array<Pizza_Topping_Update_Column>;
  where?: InputMaybe<Pizza_Topping_Bool_Exp>;
};

/** Ordering options when selecting data from "pizza_topping". */
export type Pizza_Topping_Order_By = {
  available?: InputMaybe<Order_By>;
  emoji?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pizza_topping_pizzas_aggregate?: InputMaybe<Pizza_Topping_Pizza_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
};

/** columns and relationships of "pizza_topping_pizza" */
export type Pizza_Topping_Pizza = {
  __typename?: 'pizza_topping_pizza';
  id: Scalars['Int']['output'];
  /** An object relationship */
  pizza: Pizza;
  pizza_id: Scalars['Int']['output'];
  /** An object relationship */
  pizza_topping: Pizza_Topping;
  pizza_topping_id: Scalars['Int']['output'];
};

/** aggregated selection of "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Aggregate = {
  __typename?: 'pizza_topping_pizza_aggregate';
  aggregate?: Maybe<Pizza_Topping_Pizza_Aggregate_Fields>;
  nodes: Array<Pizza_Topping_Pizza>;
};

export type Pizza_Topping_Pizza_Aggregate_Bool_Exp = {
  count?: InputMaybe<Pizza_Topping_Pizza_Aggregate_Bool_Exp_Count>;
};

export type Pizza_Topping_Pizza_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Pizza_Topping_Pizza_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Pizza_Topping_Pizza_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Aggregate_Fields = {
  __typename?: 'pizza_topping_pizza_aggregate_fields';
  avg?: Maybe<Pizza_Topping_Pizza_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Pizza_Topping_Pizza_Max_Fields>;
  min?: Maybe<Pizza_Topping_Pizza_Min_Fields>;
  stddev?: Maybe<Pizza_Topping_Pizza_Stddev_Fields>;
  stddev_pop?: Maybe<Pizza_Topping_Pizza_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pizza_Topping_Pizza_Stddev_Samp_Fields>;
  sum?: Maybe<Pizza_Topping_Pizza_Sum_Fields>;
  var_pop?: Maybe<Pizza_Topping_Pizza_Var_Pop_Fields>;
  var_samp?: Maybe<Pizza_Topping_Pizza_Var_Samp_Fields>;
  variance?: Maybe<Pizza_Topping_Pizza_Variance_Fields>;
};


/** aggregate fields of "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pizza_Topping_Pizza_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Aggregate_Order_By = {
  avg?: InputMaybe<Pizza_Topping_Pizza_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Pizza_Topping_Pizza_Max_Order_By>;
  min?: InputMaybe<Pizza_Topping_Pizza_Min_Order_By>;
  stddev?: InputMaybe<Pizza_Topping_Pizza_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Pizza_Topping_Pizza_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Pizza_Topping_Pizza_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Pizza_Topping_Pizza_Sum_Order_By>;
  var_pop?: InputMaybe<Pizza_Topping_Pizza_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Pizza_Topping_Pizza_Var_Samp_Order_By>;
  variance?: InputMaybe<Pizza_Topping_Pizza_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Arr_Rel_Insert_Input = {
  data: Array<Pizza_Topping_Pizza_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Pizza_Topping_Pizza_On_Conflict>;
};

/** aggregate avg on columns */
export type Pizza_Topping_Pizza_Avg_Fields = {
  __typename?: 'pizza_topping_pizza_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  pizza_id?: Maybe<Scalars['Float']['output']>;
  pizza_topping_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
  pizza_topping_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "pizza_topping_pizza". All fields are combined with a logical 'AND'. */
export type Pizza_Topping_Pizza_Bool_Exp = {
  _and?: InputMaybe<Array<Pizza_Topping_Pizza_Bool_Exp>>;
  _not?: InputMaybe<Pizza_Topping_Pizza_Bool_Exp>;
  _or?: InputMaybe<Array<Pizza_Topping_Pizza_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  pizza?: InputMaybe<Pizza_Bool_Exp>;
  pizza_id?: InputMaybe<Int_Comparison_Exp>;
  pizza_topping?: InputMaybe<Pizza_Topping_Bool_Exp>;
  pizza_topping_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "pizza_topping_pizza" */
export enum Pizza_Topping_Pizza_Constraint {
  /** unique or primary key constraint on columns "id" */
  PizzaToppingPizzaPkey = 'pizza_topping_pizza_pkey'
}

/** input type for incrementing numeric columns in table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  pizza_id?: InputMaybe<Scalars['Int']['input']>;
  pizza_topping_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  pizza?: InputMaybe<Pizza_Obj_Rel_Insert_Input>;
  pizza_id?: InputMaybe<Scalars['Int']['input']>;
  pizza_topping?: InputMaybe<Pizza_Topping_Obj_Rel_Insert_Input>;
  pizza_topping_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Pizza_Topping_Pizza_Max_Fields = {
  __typename?: 'pizza_topping_pizza_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  pizza_id?: Maybe<Scalars['Int']['output']>;
  pizza_topping_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
  pizza_topping_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Pizza_Topping_Pizza_Min_Fields = {
  __typename?: 'pizza_topping_pizza_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  pizza_id?: Maybe<Scalars['Int']['output']>;
  pizza_topping_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
  pizza_topping_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Mutation_Response = {
  __typename?: 'pizza_topping_pizza_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Pizza_Topping_Pizza>;
};

/** on_conflict condition type for table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_On_Conflict = {
  constraint: Pizza_Topping_Pizza_Constraint;
  update_columns?: Array<Pizza_Topping_Pizza_Update_Column>;
  where?: InputMaybe<Pizza_Topping_Pizza_Bool_Exp>;
};

/** Ordering options when selecting data from "pizza_topping_pizza". */
export type Pizza_Topping_Pizza_Order_By = {
  id?: InputMaybe<Order_By>;
  pizza?: InputMaybe<Pizza_Order_By>;
  pizza_id?: InputMaybe<Order_By>;
  pizza_topping?: InputMaybe<Pizza_Topping_Order_By>;
  pizza_topping_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: pizza_topping_pizza */
export type Pizza_Topping_Pizza_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "pizza_topping_pizza" */
export enum Pizza_Topping_Pizza_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PizzaId = 'pizza_id',
  /** column name */
  PizzaToppingId = 'pizza_topping_id'
}

/** input type for updating data in table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  pizza_id?: InputMaybe<Scalars['Int']['input']>;
  pizza_topping_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Pizza_Topping_Pizza_Stddev_Fields = {
  __typename?: 'pizza_topping_pizza_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  pizza_id?: Maybe<Scalars['Float']['output']>;
  pizza_topping_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
  pizza_topping_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Pizza_Topping_Pizza_Stddev_Pop_Fields = {
  __typename?: 'pizza_topping_pizza_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  pizza_id?: Maybe<Scalars['Float']['output']>;
  pizza_topping_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
  pizza_topping_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Pizza_Topping_Pizza_Stddev_Samp_Fields = {
  __typename?: 'pizza_topping_pizza_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  pizza_id?: Maybe<Scalars['Float']['output']>;
  pizza_topping_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
  pizza_topping_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pizza_Topping_Pizza_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pizza_Topping_Pizza_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  pizza_id?: InputMaybe<Scalars['Int']['input']>;
  pizza_topping_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Pizza_Topping_Pizza_Sum_Fields = {
  __typename?: 'pizza_topping_pizza_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  pizza_id?: Maybe<Scalars['Int']['output']>;
  pizza_topping_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
  pizza_topping_id?: InputMaybe<Order_By>;
};

/** update columns of table "pizza_topping_pizza" */
export enum Pizza_Topping_Pizza_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PizzaId = 'pizza_id',
  /** column name */
  PizzaToppingId = 'pizza_topping_id'
}

export type Pizza_Topping_Pizza_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Pizza_Topping_Pizza_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Pizza_Topping_Pizza_Set_Input>;
  /** filter the rows which have to be updated */
  where: Pizza_Topping_Pizza_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Pizza_Topping_Pizza_Var_Pop_Fields = {
  __typename?: 'pizza_topping_pizza_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  pizza_id?: Maybe<Scalars['Float']['output']>;
  pizza_topping_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
  pizza_topping_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Pizza_Topping_Pizza_Var_Samp_Fields = {
  __typename?: 'pizza_topping_pizza_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  pizza_id?: Maybe<Scalars['Float']['output']>;
  pizza_topping_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
  pizza_topping_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Pizza_Topping_Pizza_Variance_Fields = {
  __typename?: 'pizza_topping_pizza_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  pizza_id?: Maybe<Scalars['Float']['output']>;
  pizza_topping_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
  pizza_topping_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: pizza_topping */
export type Pizza_Topping_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "pizza_topping" */
export enum Pizza_Topping_Select_Column {
  /** column name */
  Available = 'available',
  /** column name */
  Emoji = 'emoji',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "pizza_topping" */
export type Pizza_Topping_Set_Input = {
  available?: InputMaybe<Scalars['Boolean']['input']>;
  emoji?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Pizza_Topping_Stddev_Fields = {
  __typename?: 'pizza_topping_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Pizza_Topping_Stddev_Pop_Fields = {
  __typename?: 'pizza_topping_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Pizza_Topping_Stddev_Samp_Fields = {
  __typename?: 'pizza_topping_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "pizza_topping" */
export type Pizza_Topping_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pizza_Topping_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pizza_Topping_Stream_Cursor_Value_Input = {
  available?: InputMaybe<Scalars['Boolean']['input']>;
  emoji?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Pizza_Topping_Sum_Fields = {
  __typename?: 'pizza_topping_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "pizza_topping" */
export enum Pizza_Topping_Update_Column {
  /** column name */
  Available = 'available',
  /** column name */
  Emoji = 'emoji',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

export type Pizza_Topping_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Pizza_Topping_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Pizza_Topping_Set_Input>;
  /** filter the rows which have to be updated */
  where: Pizza_Topping_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Pizza_Topping_Var_Pop_Fields = {
  __typename?: 'pizza_topping_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Pizza_Topping_Var_Samp_Fields = {
  __typename?: 'pizza_topping_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Pizza_Topping_Variance_Fields = {
  __typename?: 'pizza_topping_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** update columns of table "pizza" */
export enum Pizza_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OriginalFriend = 'original_friend',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Pizza_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Pizza_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Pizza_Set_Input>;
  /** filter the rows which have to be updated */
  where: Pizza_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Pizza_Var_Pop_Fields = {
  __typename?: 'pizza_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  original_friend?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Pizza_Var_Samp_Fields = {
  __typename?: 'pizza_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  original_friend?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Pizza_Variance_Fields = {
  __typename?: 'pizza_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  original_friend?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['Float']['output']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "friend" */
  friend: Array<Friend>;
  /** fetch aggregated fields from the table: "friend" */
  friend_aggregate: Friend_Aggregate;
  /** fetch data from the table: "friend" using primary key columns */
  friend_by_pk?: Maybe<Friend>;
  /** fetch data from the table: "pizza" */
  pizza: Array<Pizza>;
  /** fetch aggregated fields from the table: "pizza" */
  pizza_aggregate: Pizza_Aggregate;
  /** fetch data from the table: "pizza" using primary key columns */
  pizza_by_pk?: Maybe<Pizza>;
  /** fetch data from the table: "pizza_order" */
  pizza_order: Array<Pizza_Order>;
  /** fetch aggregated fields from the table: "pizza_order" */
  pizza_order_aggregate: Pizza_Order_Aggregate;
  /** fetch data from the table: "pizza_order" using primary key columns */
  pizza_order_by_pk?: Maybe<Pizza_Order>;
  /** fetch data from the table: "pizza_topping" */
  pizza_topping: Array<Pizza_Topping>;
  /** fetch aggregated fields from the table: "pizza_topping" */
  pizza_topping_aggregate: Pizza_Topping_Aggregate;
  /** fetch data from the table: "pizza_topping" using primary key columns */
  pizza_topping_by_pk?: Maybe<Pizza_Topping>;
  /** fetch data from the table: "pizza_topping_pizza" */
  pizza_topping_pizza: Array<Pizza_Topping_Pizza>;
  /** fetch aggregated fields from the table: "pizza_topping_pizza" */
  pizza_topping_pizza_aggregate: Pizza_Topping_Pizza_Aggregate;
  /** fetch data from the table: "pizza_topping_pizza" using primary key columns */
  pizza_topping_pizza_by_pk?: Maybe<Pizza_Topping_Pizza>;
};


export type Query_RootFriendArgs = {
  distinct_on?: InputMaybe<Array<Friend_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Friend_Order_By>>;
  where?: InputMaybe<Friend_Bool_Exp>;
};


export type Query_RootFriend_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Friend_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Friend_Order_By>>;
  where?: InputMaybe<Friend_Bool_Exp>;
};


export type Query_RootFriend_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootPizzaArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pizza_Order_By>>;
  where?: InputMaybe<Pizza_Bool_Exp>;
};


export type Query_RootPizza_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pizza_Order_By>>;
  where?: InputMaybe<Pizza_Bool_Exp>;
};


export type Query_RootPizza_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootPizza_OrderArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pizza_Order_Order_By>>;
  where?: InputMaybe<Pizza_Order_Bool_Exp>;
};


export type Query_RootPizza_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pizza_Order_Order_By>>;
  where?: InputMaybe<Pizza_Order_Bool_Exp>;
};


export type Query_RootPizza_Order_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootPizza_ToppingArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Topping_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pizza_Topping_Order_By>>;
  where?: InputMaybe<Pizza_Topping_Bool_Exp>;
};


export type Query_RootPizza_Topping_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Topping_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pizza_Topping_Order_By>>;
  where?: InputMaybe<Pizza_Topping_Bool_Exp>;
};


export type Query_RootPizza_Topping_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootPizza_Topping_PizzaArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Topping_Pizza_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pizza_Topping_Pizza_Order_By>>;
  where?: InputMaybe<Pizza_Topping_Pizza_Bool_Exp>;
};


export type Query_RootPizza_Topping_Pizza_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Topping_Pizza_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pizza_Topping_Pizza_Order_By>>;
  where?: InputMaybe<Pizza_Topping_Pizza_Bool_Exp>;
};


export type Query_RootPizza_Topping_Pizza_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "friend" */
  friend: Array<Friend>;
  /** fetch aggregated fields from the table: "friend" */
  friend_aggregate: Friend_Aggregate;
  /** fetch data from the table: "friend" using primary key columns */
  friend_by_pk?: Maybe<Friend>;
  /** fetch data from the table in a streaming manner: "friend" */
  friend_stream: Array<Friend>;
  /** fetch data from the table: "pizza" */
  pizza: Array<Pizza>;
  /** fetch aggregated fields from the table: "pizza" */
  pizza_aggregate: Pizza_Aggregate;
  /** fetch data from the table: "pizza" using primary key columns */
  pizza_by_pk?: Maybe<Pizza>;
  /** fetch data from the table: "pizza_order" */
  pizza_order: Array<Pizza_Order>;
  /** fetch aggregated fields from the table: "pizza_order" */
  pizza_order_aggregate: Pizza_Order_Aggregate;
  /** fetch data from the table: "pizza_order" using primary key columns */
  pizza_order_by_pk?: Maybe<Pizza_Order>;
  /** fetch data from the table in a streaming manner: "pizza_order" */
  pizza_order_stream: Array<Pizza_Order>;
  /** fetch data from the table in a streaming manner: "pizza" */
  pizza_stream: Array<Pizza>;
  /** fetch data from the table: "pizza_topping" */
  pizza_topping: Array<Pizza_Topping>;
  /** fetch aggregated fields from the table: "pizza_topping" */
  pizza_topping_aggregate: Pizza_Topping_Aggregate;
  /** fetch data from the table: "pizza_topping" using primary key columns */
  pizza_topping_by_pk?: Maybe<Pizza_Topping>;
  /** fetch data from the table: "pizza_topping_pizza" */
  pizza_topping_pizza: Array<Pizza_Topping_Pizza>;
  /** fetch aggregated fields from the table: "pizza_topping_pizza" */
  pizza_topping_pizza_aggregate: Pizza_Topping_Pizza_Aggregate;
  /** fetch data from the table: "pizza_topping_pizza" using primary key columns */
  pizza_topping_pizza_by_pk?: Maybe<Pizza_Topping_Pizza>;
  /** fetch data from the table in a streaming manner: "pizza_topping_pizza" */
  pizza_topping_pizza_stream: Array<Pizza_Topping_Pizza>;
  /** fetch data from the table in a streaming manner: "pizza_topping" */
  pizza_topping_stream: Array<Pizza_Topping>;
};


export type Subscription_RootFriendArgs = {
  distinct_on?: InputMaybe<Array<Friend_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Friend_Order_By>>;
  where?: InputMaybe<Friend_Bool_Exp>;
};


export type Subscription_RootFriend_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Friend_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Friend_Order_By>>;
  where?: InputMaybe<Friend_Bool_Exp>;
};


export type Subscription_RootFriend_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootFriend_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Friend_Stream_Cursor_Input>>;
  where?: InputMaybe<Friend_Bool_Exp>;
};


export type Subscription_RootPizzaArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pizza_Order_By>>;
  where?: InputMaybe<Pizza_Bool_Exp>;
};


export type Subscription_RootPizza_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pizza_Order_By>>;
  where?: InputMaybe<Pizza_Bool_Exp>;
};


export type Subscription_RootPizza_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootPizza_OrderArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pizza_Order_Order_By>>;
  where?: InputMaybe<Pizza_Order_Bool_Exp>;
};


export type Subscription_RootPizza_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pizza_Order_Order_By>>;
  where?: InputMaybe<Pizza_Order_Bool_Exp>;
};


export type Subscription_RootPizza_Order_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootPizza_Order_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Pizza_Order_Stream_Cursor_Input>>;
  where?: InputMaybe<Pizza_Order_Bool_Exp>;
};


export type Subscription_RootPizza_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Pizza_Stream_Cursor_Input>>;
  where?: InputMaybe<Pizza_Bool_Exp>;
};


export type Subscription_RootPizza_ToppingArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Topping_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pizza_Topping_Order_By>>;
  where?: InputMaybe<Pizza_Topping_Bool_Exp>;
};


export type Subscription_RootPizza_Topping_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Topping_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pizza_Topping_Order_By>>;
  where?: InputMaybe<Pizza_Topping_Bool_Exp>;
};


export type Subscription_RootPizza_Topping_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootPizza_Topping_PizzaArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Topping_Pizza_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pizza_Topping_Pizza_Order_By>>;
  where?: InputMaybe<Pizza_Topping_Pizza_Bool_Exp>;
};


export type Subscription_RootPizza_Topping_Pizza_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Topping_Pizza_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pizza_Topping_Pizza_Order_By>>;
  where?: InputMaybe<Pizza_Topping_Pizza_Bool_Exp>;
};


export type Subscription_RootPizza_Topping_Pizza_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootPizza_Topping_Pizza_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Pizza_Topping_Pizza_Stream_Cursor_Input>>;
  where?: InputMaybe<Pizza_Topping_Pizza_Bool_Exp>;
};


export type Subscription_RootPizza_Topping_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Pizza_Topping_Stream_Cursor_Input>>;
  where?: InputMaybe<Pizza_Topping_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

export type InsertFriendOneMutationVariables = Exact<{
  username?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
}>;


export type InsertFriendOneMutation = { __typename?: 'mutation_root', insert_friend_one?: { __typename?: 'friend', id: number, username?: string | null } | null };

export type CheckFriendQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']['input']>;
}>;


export type CheckFriendQuery = { __typename?: 'query_root', friend: Array<{ __typename?: 'friend', id: number, username?: string | null, password?: string | null }> };

export type GetFriendsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFriendsQuery = { __typename?: 'query_root', friend: Array<{ __typename?: 'friend', username?: string | null, id: number }> };

export type LoginMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'mutation_root', login?: { __typename?: 'FriendOutput', username?: string | null, token?: string | null, id?: number | null } | null };

export type SignupMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignupMutation = { __typename?: 'mutation_root', signup?: { __typename?: 'FriendOutput', username?: string | null, token?: string | null, id?: number | null } | null };


export const InsertFriendOne = gql`
    mutation InsertFriendOne($username: String, $password: String) {
  insert_friend_one(object: {username: $username, password: $password}) {
    id
    username
  }
}
    `;
export const CheckFriend = gql`
    query CheckFriend($username: String) {
  friend(where: {username: {_eq: $username}}) {
    id
    username
    password
  }
}
    `;
export const GetFriends = gql`
    query GetFriends {
  friend {
    username
    id
  }
}
    `;
export const Login = gql`
    mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    username
    token
    id
  }
}
    `;
export const Signup = gql`
    mutation Signup($username: String!, $password: String!) {
  signup(username: $username, password: $password) {
    username
    token
    id
  }
}
    `;
import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "query_root"
    },
    "mutationType": {
      "name": "mutation_root"
    },
    "subscriptionType": {
      "name": "subscription_root"
    },
    "types": [
      {
        "kind": "OBJECT",
        "name": "FriendOutput",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "password",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "token",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "username",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "friend",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "password",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_orders",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_order",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_orders_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_order_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "username",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "friend_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "friend_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "friend",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "friend_aggregate_fields",
        "fields": [
          {
            "name": "avg",
            "type": {
              "kind": "OBJECT",
              "name": "friend_avg_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "friend_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "friend_min_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev",
            "type": {
              "kind": "OBJECT",
              "name": "friend_stddev_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_pop",
            "type": {
              "kind": "OBJECT",
              "name": "friend_stddev_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_samp",
            "type": {
              "kind": "OBJECT",
              "name": "friend_stddev_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sum",
            "type": {
              "kind": "OBJECT",
              "name": "friend_sum_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_pop",
            "type": {
              "kind": "OBJECT",
              "name": "friend_var_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_samp",
            "type": {
              "kind": "OBJECT",
              "name": "friend_var_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "variance",
            "type": {
              "kind": "OBJECT",
              "name": "friend_variance_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "friend_avg_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "friend_max_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "password",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "username",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "friend_min_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "password",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "username",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "friend_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "friend",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "friend_stddev_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "friend_stddev_pop_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "friend_stddev_samp_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "friend_sum_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "friend_var_pop_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "friend_var_samp_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "friend_variance_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "mutation_root",
        "fields": [
          {
            "name": "delete_friend",
            "type": {
              "kind": "OBJECT",
              "name": "friend_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_friend_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "friend",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_pizza",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_pizza_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_pizza_order",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_pizza_order_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_pizza_topping",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_pizza_topping_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_pizza_topping_pizza",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_pizza_topping_pizza_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insert_friend",
            "type": {
              "kind": "OBJECT",
              "name": "friend_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_friend_one",
            "type": {
              "kind": "OBJECT",
              "name": "friend",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_pizza",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_pizza_one",
            "type": {
              "kind": "OBJECT",
              "name": "pizza",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_pizza_order",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_pizza_order_one",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_pizza_topping",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_pizza_topping_one",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_pizza_topping_pizza",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_pizza_topping_pizza_one",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "login",
            "type": {
              "kind": "OBJECT",
              "name": "FriendOutput",
              "ofType": null
            },
            "args": [
              {
                "name": "password",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "username",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "signup",
            "type": {
              "kind": "OBJECT",
              "name": "FriendOutput",
              "ofType": null
            },
            "args": [
              {
                "name": "password",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "username",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_friend",
            "type": {
              "kind": "OBJECT",
              "name": "friend_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_friend_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "friend",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_friend_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "friend_mutation_response",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "update_pizza",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_pizza_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_pizza_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_mutation_response",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "update_pizza_order",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_pizza_order_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_pizza_order_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_order_mutation_response",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "update_pizza_topping",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_pizza_topping_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_pizza_topping_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_topping_mutation_response",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "update_pizza_topping_pizza",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_pizza_topping_pizza_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_pizza_topping_pizza_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_topping_pizza_mutation_response",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "original_friend",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "pizza_orders",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_order",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_orders_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_order_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_topping_pizzas",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_topping_pizza",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_topping_pizzas_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_topping_pizza_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_aggregate_fields",
        "fields": [
          {
            "name": "avg",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_avg_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_min_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_stddev_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_pop",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_stddev_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_samp",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_stddev_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sum",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_sum_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_pop",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_var_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_samp",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_var_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "variance",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_variance_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_avg_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "original_friend",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_max_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "original_friend",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_min_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "original_friend",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order",
        "fields": [
          {
            "name": "friend",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "friend",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "friend_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "pizza",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_order",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order_aggregate_fields",
        "fields": [
          {
            "name": "avg",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_avg_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_min_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_stddev_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_pop",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_stddev_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_samp",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_stddev_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sum",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_sum_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_pop",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_var_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_samp",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_var_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "variance",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_variance_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order_avg_fields",
        "fields": [
          {
            "name": "friend_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order_max_fields",
        "fields": [
          {
            "name": "friend_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order_min_fields",
        "fields": [
          {
            "name": "friend_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_order",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order_stddev_fields",
        "fields": [
          {
            "name": "friend_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order_stddev_pop_fields",
        "fields": [
          {
            "name": "friend_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order_stddev_samp_fields",
        "fields": [
          {
            "name": "friend_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order_sum_fields",
        "fields": [
          {
            "name": "friend_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order_var_pop_fields",
        "fields": [
          {
            "name": "friend_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order_var_samp_fields",
        "fields": [
          {
            "name": "friend_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order_variance_fields",
        "fields": [
          {
            "name": "friend_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_stddev_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "original_friend",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_stddev_pop_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "original_friend",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_stddev_samp_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "original_friend",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_sum_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "original_friend",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping",
        "fields": [
          {
            "name": "available",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "emoji",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "pizza_topping_pizzas",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_topping_pizza",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_topping_pizzas_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_topping_pizza_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_topping",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_aggregate_fields",
        "fields": [
          {
            "name": "avg",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_avg_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_min_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_stddev_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_pop",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_stddev_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_samp",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_stddev_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sum",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_sum_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_pop",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_var_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_samp",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_var_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "variance",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_variance_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_avg_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_max_fields",
        "fields": [
          {
            "name": "emoji",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_min_fields",
        "fields": [
          {
            "name": "emoji",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_topping",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "pizza",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "pizza_topping",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_topping",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "pizza_topping_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_topping_pizza",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza_aggregate_fields",
        "fields": [
          {
            "name": "avg",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_avg_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_min_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_stddev_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_pop",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_stddev_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_samp",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_stddev_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sum",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_sum_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_pop",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_var_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_samp",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_var_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "variance",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_variance_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza_avg_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_topping_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza_max_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_topping_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza_min_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_topping_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_topping_pizza",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza_stddev_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_topping_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza_stddev_pop_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_topping_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza_stddev_samp_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_topping_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza_sum_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_topping_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza_var_pop_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_topping_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza_var_samp_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_topping_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza_variance_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_topping_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_stddev_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_stddev_pop_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_stddev_samp_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_sum_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_var_pop_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_var_samp_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_variance_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_var_pop_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "original_friend",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_var_samp_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "original_friend",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_variance_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "original_friend",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "query_root",
        "fields": [
          {
            "name": "friend",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "friend",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "friend_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "friend_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "friend_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "friend",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "pizza",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "pizza_order",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_order",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_order_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_order_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_order_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "pizza_topping",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_topping",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_topping_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_topping_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_topping_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "pizza_topping_pizza",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_topping_pizza",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_topping_pizza_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_topping_pizza_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_topping_pizza_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "subscription_root",
        "fields": [
          {
            "name": "friend",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "friend",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "friend_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "friend_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "friend_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "friend",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "friend_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "friend",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "pizza_order",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_order",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_order_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_order_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_order_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "pizza_order_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_order",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_topping",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_topping",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_topping_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_topping_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_topping_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "pizza_topping_pizza",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_topping_pizza",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_topping_pizza_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_topping_pizza_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_topping_pizza_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "pizza_topping_pizza_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_topping_pizza",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_topping_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_topping",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;