import React from 'react';
import Autocomplete from './Auto';
import Clock from './Clock';
import Folder from './Folder';
import Weather from './Weather';

const folders = [
  { title: 'one', content: 'I am the first' },
  { title: 'two', content: 'Second folder here' },
  { title: 'three', content: 'Third folder here' }
];

const names = [
  'nathan',
  'jack',
  'bob',
  'sara',
  'jackie',
  'yuna',
  'renerose',
  'sandra',
  'demi',
  'maddie',
  'ariel',
]

const Root = () => (
  <div>
    <Clock/>
    <Folder folders={folders} />
    <Weather />
    <Autocomplete names={names}/>
  </div>
);

export default Root;
