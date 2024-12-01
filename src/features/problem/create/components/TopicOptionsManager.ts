import { ALGORITHM_LANGUAGE_OPTIONS, TOPIC_OPTIONS } from '@/constants/problem'

export class TopicOptionsManager {
  static getTopicOptions(category: string) {
    return category === 'COMPUTER_SCIENCE_TERM'
      ? TOPIC_OPTIONS
      : ALGORITHM_LANGUAGE_OPTIONS
  }

  static getDefaultTopic(category: string) {
    const options = this.getTopicOptions(category)

    if (options?.length > 0) {
      const firstOption = options[0]
      return typeof firstOption === 'object' ? firstOption.value : firstOption
    }
    return ''
  }
}
