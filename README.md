# Locations API

## Description

This API is used to get country, state and city from raw data of https://countrystatecity.in/

## Installation

```bash
$ bun install
```

## Running the app

```bash
# development
$ bun run dev

# production
$ bun run start
```

## Endpoints from `/src/app/source/data.json`

### GetLocations

`/source/locations`

#### Query Parameters

| Name      | Type   | Description                             | Example | Required |
| --------- | ------ | --------------------------------------- | ------- | -------- |
| countryId | string | ISO2                                    | AR      | false    |
| stateId   | string | Values from `/src/app/source/data.json` | 124     | false    |
| cityId    | string | Values from `/src/app/source/data.json` | 124     | false    |

### getLocation

`/source/location`

#### Query Parameters

| Name      | Type   | Description                             | Example | Required |
| --------- | ------ | --------------------------------------- | ------- | -------- |
| countryId | string | ISO2                                    | AR      | true     |
| stateId   | string | Values from `/src/app/source/data.json` | 124     | false    |
| cityId    | string | Values from `/src/app/source/data.json` | 124     | false    |
