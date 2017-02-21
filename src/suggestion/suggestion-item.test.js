import {mount} from 'enzyme';
import {assert} from 'chai';
import React from 'react';
import  SuggestionItem from './suggestion-item';
import sinon from 'sinon';

import jsdom from 'jsdom'

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

function item() {
  return {header: 'header'};
}

function renderSuggestionItem(isHighlighted = true, refHighlightedSuggestion = ()=>{}, onSelect = ()=>{}) {
  return mount(<SuggestionItem
    onSelect={onSelect}
    item={item()}
    isHighlighted={isHighlighted}
    refHighlightedSuggestion={refHighlightedSuggestion}
    render={({header}) => <h1>{header}</h1>}
  />);
}

describe('<SuggestionItem />', () => {

  it('item is rendered', () => {
    const wrapper = renderSuggestionItem();
    const li = wrapper.find('li');

    assert.equal(li.childAt(0).html(), '<h1>header</h1>');
  });

  it('isHighlighted', () => {
    const refHighlightedSuggestionSpy = sinon.spy();
    const wrapper = renderSuggestionItem(true, refHighlightedSuggestionSpy);

    assert.isTrue(wrapper.hasClass('account-suggestion__highlighted'));
    assert.isTrue(wrapper.hasClass('account-suggestion'));
    assert.isTrue(refHighlightedSuggestionSpy.calledOnce);
  });


  it('not Highlighted', () => {
    const refHighlightedSuggestionSpy = sinon.spy();
    const wrapper = renderSuggestionItem(false, refHighlightedSuggestionSpy);

    assert.isFalse(wrapper.hasClass('account-suggestion__highlighted'));
    assert.isTrue(wrapper.hasClass('account-suggestion'));
    assert.isFalse(refHighlightedSuggestionSpy.called);
  });

  it('onSelect called', () => {
    const onSelectSpy = sinon.spy();
    const wrapper = renderSuggestionItem(true, ()=>{}, onSelectSpy);
    wrapper.simulate('mousedown');
    assert.isTrue(onSelectSpy.calledWith(item()));
  });
});
