import { shallowMount } from '@vue/test-utils'
import axios from 'axios';
import InputsContainer from '../../components/InputsContainer.vue';

const name = 'Steve Jobs';
const birthDate = '1955-02-24';
const apiUrl = 'http://localhost:3003/';

describe('InputsContainer.vue', () => {
  beforeEach(() => {
    jest.spyOn(axios, 'post').mockImplementation(() => {}).mockName('API');
    jest.spyOn(global, 'alert').mockImplementation(() => {}).mockName('ALERT');
  });

  afterEach(() => jest.clearAllMocks());
  
  it('renders all the correct information', () => {
    const component = shallowMount(InputsContainer);
    const title = component.find('h1').text();
    const fullNameInput = component.find('input').attributes();
    const dateInput = component.findAll('input')[1].attributes();
    const registerButton = component.find('button');
    
    expect(component.vm.$options.name).toMatch('InputsContainer');
    expect(title).toMatch('DG Solutions Challenge');
    expect(fullNameInput.type).toMatch('text');
    expect(fullNameInput.name).toMatch('name-input');
    expect(dateInput.type).toMatch('date');
    expect(dateInput.name).toMatch('birth-date-input');
    expect(registerButton.text()).toMatch('Registrar');
  });

  it('change component state when user type on both inputs', () => {
    const component = shallowMount(InputsContainer);
    const fullNameInput = component.find('input[type="text"]');
    const dateInput = component.find('input[type="date"]');

    expect(fullNameInput.element.value).toMatch('');
    expect(dateInput.element.value).toMatch('');

    fullNameInput.setValue('Steve Jobs');
    dateInput.setValue('1955-02-24');

    expect(fullNameInput.element.value).toMatch(name);
    expect(dateInput.element.value).toMatch(birthDate);
    expect(component.vm.$data.name).toMatch(name);
    expect(component.vm.$data.birthDate).toMatch(birthDate);
  });

  it('successfully call api after clicking the register button', () => {
    const component = shallowMount(InputsContainer);
    component.find('input[type="text"]').setValue(name);
    component.find('input[type="date"]').setValue(birthDate);
    const registerButton = component.find('button');
    const nameState = component.vm.$data.name;
    const birthDateState = component.vm.$data.birthDate

    registerButton.trigger('click');
    expect(axios.post).toHaveBeenCalled();
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(apiUrl, { 
      name: nameState,
      birthDate: birthDateState 
    });
  });
});
