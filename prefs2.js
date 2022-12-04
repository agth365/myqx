console.log('p21')
$prefs.setValueForKey('p1.a', 'a11')
let x = $prefs.valueForKey('p1.a')
x = 'cc'
$notify('主标题p2', '副标题2', 'p1.a2:' + x)
console.log('p22')