import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { AcJb } from '../src/AcJb.js';
import '../src/ac-jb.js';

describe('AcJb', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<AcJb>(html`<ac-jb></ac-jb>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<AcJb>(html`<ac-jb></ac-jb>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<AcJb>(html`<ac-jb title="attribute title"></ac-jb>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<AcJb>(html`<ac-jb></ac-jb>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
