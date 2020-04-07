import firebase  from 'firebase/app'
import 'firebase/firestore'


const firestore = firebase.firestore()

firestore.collection('users').doc('QWePa3acIcaJpSfc9NUl').collection('cartItems').doc('VBxptaNExqHTfb16BH3F')

firestore.doc('/users/QWePa3acIcaJpSfc9NUl/cartItems/VBxptaNExqHTfb16BH3F')

firestore.collection('/users/QWePa3acIcaJpSfc9NUl/cartItems')