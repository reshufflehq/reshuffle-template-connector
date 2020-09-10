##BEGIN - TO DELETE TILL END

THIS IS A TEMPLATE REPO FOR RESHUFFLE CONNECTOR
1. Create your own repo from this template in Github
2. Rename all occurrences of _CONNECTOR_NAME_
3. `npm install`
4. `npm run build:watch`
5. Implements your events/actions in `src/index.ts`
6. `npm run lint`
8. Push your code
9. Go to https://app.circleci.com/projects/project-dashboard/github/reshufflehq/
    a. You should see your new connector repo
    b. click on `Set Up Project` for the repo
    c. click on `Use Existing Config`
    d. click on `Start Building`

10. If circle CI checks are all green, you are all set!

//Keep documentation template below

##END

# reshuffle-_CONNECTOR_NAME_-connector

###Reshuffle _CONNECTOR_NAME_ Connector

This connector provides <description>.

####Configuration Options:
```typescript
interface _CONNECTOR_NAME_ConnectorConfigOptions {
  foo: string // foo description
  bar?: number // bar description
}
```

#### Connector events

##### event1 description
The connector fires this event when ...

##### event2 description
The connector fires this event when ...

#### Connector actions

##### action1
The connector provides action1 which ...

###### action2
The connector provides action2 which ...