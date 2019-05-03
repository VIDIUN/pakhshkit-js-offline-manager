## Error Handling

The Download Manager fires error events. The errors are in the same structure as the Vidiun Player errors.

Offline manager errors category number is 9.

> Read more about the Vidiun player errors [here](https://github.com/vidiun/vidiun-player-js/blob/master/docs/errors.md).

Here's an example of how to listen to an error event:
```javascript
let offlineManager = new VidiunPlayer.OfflineManager(configuration)
offlineManager.addEventListener("error", event => {
	const error = e.payload;
	console.log('The error severity is: ' + error.severity);
	console.log('The error category is: ' + error.category);
	console.log('The error code is: ' + error.code);
	console.log('The error data is', error.data);
});
```

### The ```data``` key
The ```data``` contains the reason for the error (if exists).
For example, while downloading a video and no more free storage exists, the following error will be raised:
```javascript
severity: 1
category: 9
code: 9011
data: {
  code:22, 
  message:"", 
  name:"QuotaExceededError"
}
```

> In the example above, ```data``` is a DOMException Object. Read more about [DOMExceptions here](https://developer.mozilla.org/en-US/docs/Web/API/DOMException)
