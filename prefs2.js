console.log('p21')
$prefs.setValueForKey('p1.a', 'a11')
let x = $prefs.valueForKey('a11')
$notify('主标题p23', '副标题2', 'p1.a2:' + x)
x = 'cc'
$notify('主标题p2', '副标题2', 'p1.a2:' + x)
console.log('p22')