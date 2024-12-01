import React from 'react'

export class FormEventHandler {
  static createTopicChangeEvent(
    value: string
  ): React.ChangeEvent<HTMLSelectElement> {
    return {
      target: {
        name: 'topic',
        value,
      },
    } as React.ChangeEvent<HTMLSelectElement>
  }
}
