import Vue from 'vue'
import Rideshare from '@/components/Rideshare'

describe('Rideshare.vue', () => {
  //Displays active drivers, passengers, routes (search)
  //Sorts based on top drivers, loyal passengers, popular routes
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Rideshare)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.rideshare h1').textContent)
      .to.equal('Fleet Status Overview')
  })
})
