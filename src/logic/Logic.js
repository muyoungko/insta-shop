import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/messaging'

import InstaApi from '../instaapi/InstaApi.js';

/*
  파이어베이스 데이터 구조

  product entity
    - id : 인스타 미디어 아이디
    - price
    - image
    - seller
    - seller_image
    - reviews


  order entity
    -

  chat entity
    -

  user entity
    -
    -

  users > user > chatid


  shops > userids > products > productid

  shops > userids > orders > order

  products > product

  chats > chatid > chat

  messages > chat > message

*/

export default class Logic{
  constructor()
  {

  }

  //static upsertAndGetUser(){}
  //static upsertAndGetShop(user){}
  static updateShopBankAcountInfo(){}
  static updateShopHelloInfo(){}


  //static transferMediaToProductInShop(){}
  //static updateProduct(){}
  static removeProductFromShop(){}
  //static selectProductFromShop(){}
  //static selectProduct(){}
  //static updateProduct(){}
  //static selectProductCandidateFromShop(){}
  static selectOrderListFromShop(seller){}
  static selectOrderDetail(orderid){}
  static changeOrderStateFromShop(){}
  static selectProfitFromShop(seller){}

  static upsertChat(){}
  static selectChatList(){}
  static selectMessageList(){}
  static sendMessage(){}
  static addDelivery(){}
  static selectDeliveryListFromUser(){}
  static selectRecentProductList(seller, shop){}
  static addRecentProduct(seller){}
  static upsertOrderFromShop(){}
  static selectOrderListFromUser(seller){}

  static transferMediaToProductInShop(shopid, media, func){
    const db = firebase.database();
    var self = this;

    db.ref('shops/'+shopid).once('value').then(function(snapshot){
      var shop = snapshot.val();
      var captionText = '';
      if(media.caption)
        captionText = media.caption.text;

      db.ref('shops/'+shopid+'/products').once('value').then(function(fProductList){
        var productKeyArray = fProductList.val();
        if(productKeyArray == null)
          productKeyArray = [];
        productKeyArray = self.removeFromArray(productKeyArray , media.id);
        productKeyArray[productKeyArray.length] = media.id;
        db.ref('shops/'+shopid+'/products').set(productKeyArray);
      });

      var product = {
          id : media.id,
          shop : shop.id,
          image : media.images.low_resolution.url ,
          image_high : media.images.standard_resolution.url ,
          caption : captionText,
          removed : false,
        }
      if(media.videos)
        product.video = media.videos.standard_resolution.url;

      db.ref('products/'+media.id).update(product);

      func();
    });

  }

  static upsertAndGetUser(func){
      InstaApi.self(function(json, error){

        if(error != null)
        {
          func(null, error);
          return;
        }

        const db = firebase.database();
        db.ref('users/'+json.data.id).update(
          {
            id : json.data.id,
            full_name : json.data.full_name,
            profile_picture : json.data.profile_picture,
            username : json.data.username
          }
        );

        db.ref('users/'+json.data.id).once('value').then(function(snapshot) {
          func(snapshot.val());
        });

      });
  }
  static upsertAndGetShop(user, func){

    const db = firebase.database();
    db.ref('shops/'+user.username).update(
      {
        id : user.username,
        full_name : user.full_name,
        profile_picture : user.profile_picture,
        username : user.username
      }
    );

    db.ref('shops/'+user.username).once('value').then(function(snapshot) {
      func(snapshot.val());
    });
  }

  static updateProduct(product, func){
    const db = firebase.database();
    db.ref('products/'+product.id).update(product, function(error){
      func(error);
    });

  }

  static selectProduct(productId ,func){
    const db = firebase.database();
    db.ref('products/'+productId).once('value').then(function(productSnapshot){
      var product = productSnapshot.val();
      func(product);
    });
  }

  static selectProductFromShop(shopId, func){
    const db = firebase.database();
    db.ref('shops/'+shopId +'/products').once('value').then(function(productIdArraySnapshot){
      var productIdArray = productIdArraySnapshot.val();
      var products = [];
      for(var i=0;i<productIdArray.length;i++)
      {
        db.ref('products/'+productIdArray[i]).once('value').then(function(snapshot){
          products.push(snapshot.val());
          if(productIdArray.length == products.length)
            func(products);
        });
      }
    });
  }

  static selectProductCandidateFromShop(shop, funca){
    const db = firebase.database();
    var self = this;

    InstaApi.recent(function(recents, e){
      var medias = recents.data;
      var c = 0;
      for(var i=0;i<medias.length;i++)
      {
        //console.log(medias[i].id);
        db.ref('products/'+medias[i].id).once('value').then(function(snapshot){
          var product = snapshot.val();
          if(snapshot != null && product.removed != true)
          {
            medias[c].product = snapshot.val();
          }
          c = c+1;
          if(medias.length == c)
          {
            //console.log(medias);
            funca(medias);
          }
        });
      }
    });
  }

  static say()
  {
    // const db = firebase.database();
    // const dbRef = db.ref().child('seller').child('muyoungko217').child('userName');
    //
    // db.ref('/seller/muyoungko217/userName').once('value').then(function(snapshot) {
    //   //var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    //   alert(snapshot.val());
    // });
  }

  static init(client_id, secret, code)
  {
    this.client_id = client_id;
    this.secret = secret;
    this.code = code;
  }


  static removeFromArray(arr, item){
    var r = [];
    var jin = 0;
    for(var i=0;i<arr.length;i++)
    {
      if(arr[i]==item)
        jin = jin+1;
      else
        r[i - jin] = arr[i];
    }
    return r;
  }
};
