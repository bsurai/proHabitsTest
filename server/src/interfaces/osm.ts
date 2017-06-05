
/**
 * AUTO-GENERATED FILE @ 2017-06-05 10:56:03 - DO NOT EDIT!
 *
 * This file was generated with schemats node package:
 * $ schemats generate -c postgres://username:password@localhost/proHabitsTest -o osm.ts
 *
 * Re-run the command above.
 *
 */


export namespace selectCommitsFields {
    export type user_id = number | null;
    export type commitment_id = number | null;
    export type duration_days = number | null;
    export type description = string | null;
    export type quote_id = number | null;
    export type author = string | null;
    export type quote = string | null;
    export type status = number | null;
    export type is_todays = boolean | null;
    export type ordering = number | null;

}

export interface SelectCommits {
    user_id: selectCommitsFields.user_id;
    commitment_id: selectCommitsFields.commitment_id;
    duration_days: selectCommitsFields.duration_days;
    description: selectCommitsFields.description;
    quote_id: selectCommitsFields.quote_id;
    author: selectCommitsFields.author;
    quote: selectCommitsFields.quote;
    status: selectCommitsFields.status;
    is_todays: selectCommitsFields.is_todays;
    ordering: selectCommitsFields.ordering;

}

export namespace users_commitmentsFields {
    export type user_id = number;
    export type commitment_id = number;
    export type start_date = Date;
    export type due_date = Date;
    export type duration_days = number;

}

export interface UsersCommitments {
    user_id: users_commitmentsFields.user_id;
    commitment_id: users_commitmentsFields.commitment_id;
    start_date: users_commitmentsFields.start_date;
    due_date: users_commitmentsFields.due_date;
    duration_days: users_commitmentsFields.duration_days;

}

export namespace usersFields {
    export type id = number;
    export type name = string;

}

export interface Users {
    id: usersFields.id;
    name: usersFields.name;

}

export namespace users_activityFields {
    export type user_id = number;
    export type commitment_id = number;
    export type day = Date;
    export type status = number;
    export type duration_days = number;

}

export interface UsersActivity {
    user_id: users_activityFields.user_id;
    commitment_id: users_activityFields.commitment_id;
    day: users_activityFields.day;
    status: users_activityFields.status;
    duration_days: users_activityFields.duration_days;

}

export namespace commitmentsFields {
    export type id = number;
    export type description = string;
    export type quote_id = number;

}

export interface Commitments {
    id: commitmentsFields.id;
    description: commitmentsFields.description;
    quote_id: commitmentsFields.quote_id;

}

export namespace quotesFields {
    export type id = number;
    export type author = string;
    export type quote = string;

}

export interface Quotes {
    id: quotesFields.id;
    author: quotesFields.author;
    quote: quotesFields.quote;

}
