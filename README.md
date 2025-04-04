# Elasticsearch autocomplete

This repository is still work in progress

## Todo

1. Try methods that require custom mappings for autocomplete fields like 'search-as-you-type' or 'completion suggester'.
2. Add optional terms / range filters for each query.
3. Try "Did you mean...?" suggestion which returns correct results even for inputs with typos or misspellings.

### Methods tested so far

#### Match Phrase Prefix

Use prefix search for last world and term (exact) search for all words before the last.
Match text in exact order of the words and result must contain words following each other so they cannot be separated by another word.

Examples (searching 'address' field):

- Text "230 DRIVE" won't return "230 RIVERSIDE DRIVE", because of the word between them.
- Text "Avenue 50" will return both "Avenue, 504" and "Avenue, 505", because for last word prefix search is performed.
- But "50 Avenue" will return "67-16 50 AVENUE", because now "50" is not last word so we use term (exact) search for it and won't have results like "5017 AVENUE I"

#### Match Bool Prefix

Use prefix search for last world and term (exact) search for all words before the last.
Match text in every position so result contains words in any order. Results with correct words order are treated as more relevant.

Examples (searching 'address' field):

- both text "DRIVE 230" and "230 DRIVE" will return address "230 RIVERSIDE DRIVE", beacuse it return result for any word order.
- text "WEST 24" will return both "101 WEST 24TH" and "240 WEST 261 STREET", but "101 WEST 24TH" will appear earlier because of words order.

#### Disjunction Max Query

Used for searching by multiple fields at the same time. In this repository it can use match phrase prefix or match bool prefix under the hood depends on the search type sent through api.

Return records matching one or more fields. The more searched fields single record match, the higher score it gets and therefore appears higher in the result list.

Examples (searching fields 'address' and 'neightborhood'):

- text "WEST 9" will return record with address "215 WEST 95" and neighborhood "UPPER WEST SIDE (79-96)" before record with address "164 WEST 9TH STREET" and neighborhood "CARROLL GARDENS", because first one have both fields matched search text.

## Installation

1. Install dependencies

```bash
$ yarn install
```

2. Create your .env file by copying .env.example

3. Run Docker Compose

```bash
$ docker-compose up -d
```

4. Create Elasticsearch index and seed it with sample data.
    > This repository contains prepared seed with 47494 records, but in order to use script correctly value for ELASTICSEARCH_INDEX env must be exactly the same as in .env.example file.

> If you want to use that repository with different data, add own seed file (json format) in src/scripts/seeds and name ELASTICSEARCH_INDEX env exactly the same.

```bash
$ yarn es:seed
```

5. Run the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

6. Go to http://localhost:3000/graphql to use the api

7. You can also go to http://localhost:5601/app/dev_tools#/console and use Kibana dev tools for query testing

## Data source

I've created sample seed for elasticsearch using
[NYC Property Sales](https://www.kaggle.com/datasets/new-york-city/nyc-property-sales) dataset from Kaggle.

## References

https://www.codeproject.com/Articles/5323717/Improving-Elasticsearch-based-Autocomplete
https://www.elastic.co/guide/en/elasticsearch/reference/8.9/query-dsl-match-query-phrase-prefix.html
https://www.elastic.co/guide/en/elasticsearch/reference/8.9/query-dsl-match-bool-prefix-query.html
https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-dis-max-query.html
