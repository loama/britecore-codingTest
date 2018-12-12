import { shallowMount } from '@vue/test-utils'
import Blank from '@/components/Blank.vue'

describe('Blank.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Blank, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
