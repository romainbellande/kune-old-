#!/bin/bash

set -e
set -u

function create_database_with_all_rights_to_user() {
	local database=$1
	echo "Creating database '$database'"
	psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
	    CREATE DATABASE ${database};
	    GRANT ALL PRIVILEGES ON DATABASE ${database} TO $POSTGRES_USER;
EOSQL
}

if [[ -n "$POSTGRES_DATABASES" ]]; then
	echo "Multiple database creation requested: $POSTGRES_DATABASES"
	for db in $POSTGRES_DATABASES; do
		echo "+ ${db}"
	done
	for db in $POSTGRES_DATABASES; do
		create_database_with_all_rights_to_user ${db}
	done
	echo "Multiple databases created"
fi
