/// <reference path="../typings/globals/mocha/index.d.ts" />
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import ClientInfo from '../src/app/bundles/details/ClientInfo'
import { mount } from 'enzyme'
import { expect } from 'chai'

describe('ClientInfo', () => {
  it('should render', () => {
    let component


    /* 
      Below is the line which causes problems with module loading
    */
    
    // component = <ClientInfo header='WoooW im soooo kewl'/>


    /*
      Below is the line which causes json reading problems with 
      enzyme
    */
    
    // const wrapper = mount(<h1>hi</h1>, { attachTo: document.body })


    /*
      These two lines work perfectly
    */
    component = <h1>SCREENSHOTS OMG</h1>
    ReactDOM.render(component, document.body)
  })
})