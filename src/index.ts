import { Reshuffle, BaseConnector, EventConfiguration } from 'reshuffle-base-connector'

export interface _CONNECTOR_NAME_ConnectorConfigOptions {
  var1: string
  // ...
}

export interface _CONNECTOR_NAME_ConnectorEventOptions {
  option1?: string
  // ...
}

export default class _CONNECTOR_NAME_Connector extends BaseConnector<
  _CONNECTOR_NAME_ConnectorConfigOptions,
  _CONNECTOR_NAME_ConnectorEventOptions
> {
  // Your class variables
  var1: string

  constructor(options: _CONNECTOR_NAME_ConnectorConfigOptions, id?: string) {
    super(options, id)
    this.var1 = options.var1
    // ...
  }

  onStart(app: Reshuffle) {
    // If you need to do something special onStart, otherwise remove this function
  }

  onStop() {
    // If you need to do something special onStop, otherwise remove this function
  }

  // Your events
  on(options: _CONNECTOR_NAME_ConnectorEventOptions, eventId: string): EventConfiguration {
    if (!eventId) {
      eventId = `_CONNECTOR_NAME_/${options.option1}/${this.id}`
    }
    const event = new EventConfiguration(eventId, this, options)
    this.eventConfigurations[event.id] = event

    return event
  }

  // Your actions
  action1(bar: string) {
    // Your implementation here
  }

  action2(foo: string) {
    // Your implementation here
  }
}

export { _CONNECTOR_NAME_Connector }
