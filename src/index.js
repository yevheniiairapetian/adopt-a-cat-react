import React from 'react';
import ReactDOM from 'react-dom/client';

const animalsToAdopt = [
  {
      name: "Lucky",
      picture: "https://placekitten.com/200/287",
  },
  {
      name: "Symba",
      picture: "https://placekitten.com/200/139",
  },
  {
      name: "Léo",
      picture: "https://placekitten.com/200/90",
  },
  {
      name: "Milo",
      picture: "https://placekitten.com/200/194",
  },
  {
      name: "Charly",
      picture: "https://placekitten.com/200/179",
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  [
    <div>{ animalsToAdopt[0].name }</div>,
    <div>animalsToAdopt[1].name</div>,
    <div>animalsToAdopt[2].name</div>,
    <div>animalsToAdopt[3].name</div>,
    <div>animalsToAdopt[4].name</div>,
  ]
);
