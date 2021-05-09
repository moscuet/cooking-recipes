import React from 'react';

import withContext from './Context_HOC'
function SomeComponent (props) {
console.log('CONTEXT', props.context)
// This should log the object you passed from ContextProvider.js:
// {
// counter: 0,
// incrementCounter: function(),
// message: "Hello, world!"
// }
return (
<div>

</div>
);
}


export default withContext(SomeComponent)