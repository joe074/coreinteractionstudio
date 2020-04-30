var animation = bodymovin.loadAnimation({
container: document.getElementById('deliveryAnimation'),
    
// Set your ID to something that you'll associate with the animation you're using //
renderer: 'svg',
loop: true,
autoplay: true,
path: 'delivery_van.json'
    
// Make sure your path has the same filename as your animated     SVG's JSON file //
})