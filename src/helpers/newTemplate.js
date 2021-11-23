export default {
  Welcome: user => `<html lang="en">
    <head>
      <title>Bootstrap Example</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .center-msg-second {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0.34px;
        color: #3E3E3E;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
        text-align: left;
        letter-spacing: 0px;
        font-size: 16px;
        color: #565656;
        opacity: 1;
      }
      .app-link {
        background-color: #F27427;
        color: black;
        padding: 14px 25px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
      }
      .app-link {
        background-color: #F27427;
        color: black;
        padding: 14px 25px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
      }
      .app-link {
        background-color: #F27427;
        color: black;
        padding: 14px 25px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
      }
    </style>
    </head>
    <body>
    <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/CmGF2Yb4lAXSB.png" width="30%" alt="">
    <hr class="jagzlogo">
    <p class="heading"><strong>Find Guides, Tours, Bike rentals and Discounts wherever you travel!</strong></p>
        <p class="name">Hey ${user},</p>
        <p class="center-msg">Welcome to JAGZ, your mobile biking companion!</p>
        <p class="center-msg">As fellow mountain bikers and cyclists, we hope you use the JAGZ app for all your travel needs!</p>
        <p class="center-msg">Feel free to book a tour with professional guides or meet up with a local who is as passionate about MTB or cycling as you.</p>
        <p class="center-msg">We’re excited to have you on board and we’ve got a lot of great features in store…</p>
        <p class="center-msg">Get started by searching for Tour Guides or Hosts in your favorite destination 
        and book your next MTB or Cycling  adventure today!</p>
      </div>
      <br/>
      <p class="paratext"><a href="https://jagz.app.link/jagz" target="_blank" class="app-link" style="color: white;">Open App!</a></p>
      <div>
      <center>
      <div>
        <p>
        <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
        <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
        <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
        <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
        <a href="https://jagzapp.com/" style="padding: 2%">
        <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
        </p>
        </div>
        </center>
      </div>
    </div>
    </body>
    </html>  
    `,
  verifyCode: user => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .center-msg-second {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0.34px;
        color: #3E3E3E;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="heading"><strong>Verify your email</strong></p>
      <p class="name">Dear ${user.greetingName},</p>
      <p class="center-msg">We’re thrilled to welcome you to the JAGZ community!</p>
      <p class="center-msg">Please verify your email in order to get started.</p>
      <p class="center-msg-second">Your JAGZ ID Verification code: <span style="font-size: 26px;
      color: #EE6026;">${user.code}</span></p>
        <p style="text-align: left;
        letter-spacing: 0px;
        color: #929292;
        opacity: 1;">Have a question? If you need any help let us know.</p>
        <p style="text-align: left;
        letter-spacing: 0px;
        color: #929292;
        opacity: 1;">You can reach us directly at: 
        <a href="" class="text-dark" style="text-align: left;
        letter-spacing: 0px;
        text-decoration: none;
        color: black;">support@jagzapp.com</a></p>
    <br>
      <p class="center-msg">Thanks,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  ForgetPassword: user => `<html lang="en">
    <head>
      <title>Bootstrap Example</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        .heading {
          text-align: center;
          font-weight: 500;
          letter-spacing: 0.68px;
          font-size: 40px;
          color: #000000;
          opacity: 1;
        }
        .name {
          text-align: center;
          letter-spacing: 0.68px;
          font-size: 28px;
          color: #000000;
          opacity: 1;
        }
        .center-msg {
          text-align: center;
          font-size: 16px;
          letter-spacing: 0.34px;
          color: #929292;
          opacity: 1;
        }
        .center-msg-second {
          text-align: center;
          font-size: 16px;
          letter-spacing: 0.34px;
          color: #3E3E3E;
          opacity: 1;
        }
      </style>
    </head>
    <body>
    <div>
      <center>
      <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
      <div class="content-text">
        <p class="heading">Verify your email<p>
        <img src="https://mtbguru.s3.amazonaws.com/gallery/oubjSbIGSkKXw.png">
        <p class="center-msg-second">Code to reset your password:</p>
        <p style="text-align: center;
        font-size: 24px;
        letter-spacing: 0.54px;
        color: #EE6026;
        opacity: 1; 
        width: 82px;
        height: 45px;">${user.code}</p>
        <p style="text-align: right;
        letter-spacing: 0px;
        color: #565656;
        font-size: 20px;
        opacity: 1;">Thanks,</p>
        <p style="text-align: right;
        letter-spacing: 0px;
        color: #565656;
        font-size: 20px;
        opacity: 1;">The JAGZ TEAM</p>
      </div>
       <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
      </center>
    </div>
    </body>
    </html>  
    `,
  BecomeHost: user => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      .heading {
        text-align: center;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 40px;
        color: #000000;
        opacity: 1;
      }
      .paratext {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 14px;
        color: #000000;
        opacity: 1;
        margin-left: 10%;
        margin-right: 10%;
      }
      .center-msg {
        text-align: center;
        font-size: 16px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .center-msg-second {
        text-align: left;
        font-size: 16px;
        color: #F27427;
        text-transform: uppercase;
        letter-spacing: 0.34px;
        opacity: 1;
        margin-left: 10%;
        margin-right: 10%;
      }
    </style>
  </head>
  <body>
  <div>
    <table>
      <tbody>
      <tr>
      <td style="text-align: center;">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/xHr3Hvd6duUPA.png">
      </td>
      </tr>
        <tr>
          <td style="text-align: center;"><p class="paratext" style="text-align: center;">Being a Host can be really fun!</p></td>
        </tr>
        <tr>
          <td style="text-align: left;">
          <p class="paratext">You can meet travelers from around the world and make a few dollars 
          if you choose…however there are responsibilities that come with the title.</p>
          </td>
        </tr>
        <tr>
          <td style="text-align: left;">
          <p class="center-msg-second">Being a Host is all about good communication :)</p>
          </td>
        </tr>
        <tr>
          <td style="text-align: left;">
          <p class="paratext">Notifications MUST be enabled to ensure timely engagement</p>
          </td>
        </tr>
        <tr>
          <td style="text-align: left;">
          <p class="paratext">The JAGZ App encourages Hosts to be individuals who are hospitable,
          love their sport (MTB or Cycling), and are naturally inclined to show
          people their trails, routes, and community.</p>
          </td>
        </tr>
        <tr>
          <td style="text-align: left;">
          <p class="paratext">Receiving a booking request is not a guarantee.</p>
          </td>
        </tr>
        <tr>
          <td style="text-align: left;">
          <p class="paratext">However, we’ve found that individuals who are more active on social media, 
          have fully filled out their profiles, and actively promote themselves are more
           likely to be booked.</p>
          </td>
        </tr>
        <tr>
          <td style="text-align: left;">
          <p class="paratext">As a Host, we also encourage you to use the JAGZ App when you travel. Our algorithm will take notice & make you more prominent.</p>
          </td>
        </tr>
      </tbody>
    </table>
    <center>
    <div>
          <p>
            <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
            <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
            <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
            <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
            <a href="https://jagzapp.com/" style="padding: 2%">
            <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
          </p>
        </div>
        </center>
  </div>
  </body>
  </html>  
  `,
  oldUserEmail: user => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 40px;
        color: #000000;
        opacity: 1;
        margin-left: 10%;
        margin-right: 10%;
        margin-bottom: 0;
        margin-top: 0;
      }
      .paratext {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 14px;
        color: #000000;
        opacity: 1;
        margin-left: 10%;
        margin-right: 10%;
      }
      .center-msg {
        text-align: center;
        font-size: 16px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .center-msg-second {
        text-align: left;
        font-size: 16px;
        color: #F27427;
        text-transform: uppercase;
        letter-spacing: 0.34px;
        opacity: 1;
        margin-left: 10%;
        margin-right: 10%;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
        margin-left: 10%;
        margin-right: 10%;
      }
      .app-link {
        background-color: #F27427;
        color: black;
        padding: 14px 25px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
      }
    </style>
  </head>
  <body>
  <div>
    <table>
      <tbody>
      <tr>
      <td style="text-align: left;">
      <p class="paratext">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/CmGF2Yb4lAXSB.png" width="30%" alt=""></p>
      <hr class="jagzlogo">
      <p class="heading"><strong>Update to JAGZ 2.0!</strong></p>
      </td>
      </tr>
        <tr>
          <td style="text-align: left;"><p class="paratext">Hi ${user}, JAGZ 2.0 is here!</p></td>
        </tr>
        <tr>
          <td style="text-align: left;">
          <p class="paratext">Thank you for downloading either MTBguru or JAGZ (after we changed the name). You were one of thousands that believed in us and became our first Users. We’re just a father and son team that took a chance, went all in, and created something around two things we both enjoy…. Biking and traveling!</p>
          </td>
        </tr>
        <tr>
        <td style="text-align: left;">
        <p class="paratext">We’ve been very quiet the past two years as we made the decision to redesign JAGZ from the ground up so we can add new features and scale in proportion to the size of the cycling and mountain biking market worldwide.</p>
        </td>
        </tr>
        <tr>
          <td style="text-align: left;">
          <p class="center-msg-second"><strong>We’ve just launched JAGZ 2.0!</strong></p>
          </td>
        </tr>
        <tr>
          <td style="text-align: left;">
          <p class="paratext"><strong>We are so grateful for your early adoption and respectfully ask that you update to the new and greatly improved JAGZ app. This will be a huge help to us as we need JAGZ to be populated with enthusiastic Hosts and Tour Guides for our traveling users.</strong></p>
          </td>
        </tr>
        <tr>
          <td style="text-align: left;">
          <p class="paratext">You will have to create a new login and password and choose between a Host Profile (most common) or a Tour Guide Profile if you are certified as such….or you can skip this and simply use JAGZ to find other Hosts and Guides when you travel.</p>
          </td>
        </tr>
        <tr>
          <td style="text-align: left;">
          <p class="paratext">Our next big addition will be ‘Bike-friendly Lodging’ which is coming soon! Rent your vacation house, condo, cabin, room or ‘glampsite’. You can sign up for that within in the App.</p>
          </td>
        </tr>
        <tr>
          <td style="text-align: left;">
          <p class="paratext">Thank you so much for your initial interest and continued support and stay tuned for a more detailed info about creating a new login!</p>
          </td>
        </tr>
        <tr>
          <td style="text-align: left;">
          <p class="paratext">Sincerely,</p>
          <p class="paratext">David & Michael</p>
          </td>
        </tr>
        <tr>
          <td style="text-align: left;">
          <p class="paratext"><a href="https://jagz.app.link/jagzEmail" target="_blank" class="app-link" style="color: white;">Update Now!</a></p>
          </td>
        </tr>
      </tbody>
    </table>
    <center>
    <div>
          <p>
            <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
            <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
            <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
            <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
            <a href="https://jagzapp.com/" style="padding: 2%">
            <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
          </p>
        </div>
        </center>
  </div>
  </body>
  </html>  
  `,
  oldUserEmailPart2: user => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 40px;
        color: #000000;
        opacity: 1;
        margin-left: 5%;
        margin-right: 10%;
        margin-bottom: 0;
        margin-top: 0;
      }
      .paratext {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 14px;
        color: #000000;
        opacity: 1;
        margin-left: 5%;
        margin-right: 10%;
      }
      .paraimg {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 14px;
        color: #000000;
        opacity: 1;
        margin-left: 2%;
        margin-right: 10%;
      }
      .center-msg {
        text-align: center;
        font-size: 16px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .center-msg-second {
        text-align: left;
        font-size: 16px;
        color: #F27427;
        text-transform: uppercase;
        letter-spacing: 0.34px;
        opacity: 1;
        margin-left: 5%;
        margin-right: 10%;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
        margin-left: 5%;
        margin-right: 10%;
      }
      .app-link {
        background-color: #F27427;
        color: black;
        padding: 14px 25px;
        text-align: center;
        font-size: 24px;
        text-decoration: none;
        display: inline-block;
      }
    </style>
  </head>
  <body>
  <div>
      <p class="paratext">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/CmGF2Yb4lAXSB.png" width="30%" alt=""></p>
      <hr class="jagzlogo">
      <p class="heading"><strong>Update to JAGZ 2.0!</strong></p>
          <p class="paratext">We are excited to announce that we have completely rebuilt the JAGZ app from the ground up!</p>
        <p class="paratext">Please update to the new version <a href="https://jagz.app.link/jagz" target="_blank" style="color: #F27427;">here</a> and signup as a new user.</p>
          <p class="paratext"><a href="https://jagz.app.link/jagz" target="_blank" class="app-link" style="color: white;">Update Now!</a></p>
          <p class="paraimg"> <img src="https://mtbguru.s3.amazonaws.com/gallery/i3lqhv6FeDtOG.jpg" alt="website" width="100%"></a></p>
        <p class="paratext"><a href="https://jagz.app.link/jagz" target="_blank" class="app-link" style="color: white;">Update Now!</a></p>
    <center>
    <div>
          <p>
            <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
            <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
            <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
            <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
            <a href="https://jagzapp.com/" style="padding: 2%">
            <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
          </p>
        </div>
        </center>
  </div>
  </body>
  </html>  
  `,
  travellerBookRequestTGBIKE: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="heading"><strong>Booking Request Sent</strong><p>
      <p class="name"><b>Hi ${booking.traveller.firstName}, your booking request was sent successfully.</b></p>
      <p class="center-msg">Please allow your Tour Guide to review the details of the booking request. Once confirmed, payment will be processed automatically on the day of your tour.</p>
      <p class="center-msg">You may now chat with your guide within the app.</p>
      <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Tour</p></td>
      <td><p class="table-detail1">Date & Time</p>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${booking.availability.tourName}</p></td>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Price</p></td>
      <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
      <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
      <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    <tr>
    <td colspan="2">
    <table style="border-top: 0;" class="table-booking">
      <tr>
      <td style="color: black; text-align: left; font-size: 16px; padding-bottom: 3%;" colspan="2"><b>Bike Rental Details</b></td>
      </tr>
      <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">Bike</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Size</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Qty</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Price</p></td>
    </tr>
    ${booking.bikeRentalDetails.map(ele => (
    `<tr>
      <td><p class="table-detail" style="margin-right: 20px;">${ele.bikeName}</p></td>
      <td><p class="table-detail">${ele.chooseBikeSize}</p></td>
      <td><p class="table-detail">${ele.userQty}</p></td>
      <td><p class="table-detail">$${ele.bikePrice}</p></td>
    </tr>`
  )).join('')
    }
    </table>
    </td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">$${booking.availability.price} x ${booking.totalRiders} travelers</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.totalRiders).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Discount</p></td>
      <td><p class="table-detail">${user.disc}%</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Tour Price</p></td>
      <td><p class="table-detail">$${((booking.availability.price * booking.totalRiders) - user.tourDiscount).toFixed(2)}</p></td>
    </tr>
    ${booking.bikeRentalDetails.map(ele => (
      `<tr>
      <td><p class="table-detail1">$${ele.bikePrice} x ${ele.userQty} bikes</p></td>
      <td><p class="table-detail">$${(ele.bikePrice * ele.userQty).toFixed(2)}</p></td>
    </tr>`
    )).join('')
    }
    <tr>
      <td><p class="table-detail1">Service Fee</p></td>
      <td><p class="table-detail">$${user.serviceFee}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${booking.cost.toFixed(2)}</b></td>
    </tr>
    </table>  
    <br>
    <p class="center-msg">You won’t be charged until your request is confirmed.</p>
      <p class="center-msg">Cheers,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  travellerAcceptRequestTGBIKE: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="heading"><strong>Booking confirmed with Tour Guide</strong><p>
      <p class="name"><b>Hi ${booking.traveller.firstName}, your booking request for ${booking.availability.tourName}  has been confirmed and payment will be processed automatically on the day of your tour.</b></p>
      <p class="center-msg">Please communicate with your guide by using our in-app chat to discuss any additional details.</p>
      <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Tour</p></td>
      <td><p class="table-detail1">Date & Time</p>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${booking.availability.tourName}</p></td>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Price</p></td>
      <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
      <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
      <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    <tr>
    <td colspan="2">
    <table style="border-top: 0;" class="table-booking">
      <tr>
      <td style="color: black; text-align: left; font-size: 16px; padding-bottom: 3%;" colspan="2"><b>Bike Rental Details</b></td>
      </tr>
      <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">Bike</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Size</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Qty</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Price</p></td>
    </tr>
    ${booking.bikeRentalDetails.map(ele => (
    `<tr>
      <td><p class="table-detail" style="margin-right: 20px;">${ele.bikeName}</p></td>
      <td><p class="table-detail">${ele.chooseBikeSize}</p></td>
      <td><p class="table-detail">${ele.userQty}</p></td>
      <td><p class="table-detail">$${ele.bikePrice}</p></td>
    </tr>`
  )).join('')
    }
    </table>
    </td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">$${booking.availability.price} x ${booking.totalRiders} travelers</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.totalRiders).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Discount</p></td>
      <td><p class="table-detail">${user.disc}%</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Tour Price</p></td>
      <td><p class="table-detail">$${((booking.availability.price * booking.totalRiders) - user.tourDiscount).toFixed(2)}</p></td>
    </tr>
    ${booking.bikeRentalDetails.map(ele => (
      `<tr>
      <td><p class="table-detail1">$${ele.bikePrice} x ${ele.userQty} bikes</p></td>
      <td><p class="table-detail">$${(ele.bikePrice * ele.userQty).toFixed(2)}</p></td>
    </tr>`
    )).join('')
    }
    <tr>
      <td><p class="table-detail1">Service Fee</p></td>
      <td><p class="table-detail">$${user.serviceFee}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${booking.cost.toFixed(2)}</b></td>
    </tr>
    </table>  
    <br>
    <p class="center-msg">Thanks for booking with us and have a great JAGZ Journey!</p>
      <p class="center-msg">Cheers,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  travellerMeetingReminderTGBIKE: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
      <p class="name">Hi ${booking.traveller.firstName},</p>
      <p class="center-msg">Just a reminder that your tour is coming up soon.</p>
      <p class="center-msg">Review the details of your booking below and chat with your guide via our in-app chat for additional information.</p>
      <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Tour</p></td>
      <td><p class="table-detail1">Date & Time</p>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${booking.availability.tourName}</p></td>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Price</p></td>
      <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
      <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
      <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    <tr>
    <td colspan="2">
    <table style="border-top: 0;" class="table-booking">
      <tr>
      <td style="color: black; text-align: left; font-size: 16px; padding-bottom: 3%;" colspan="2"><b>Bike Rental Details</b></td>
      </tr>
      <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">Bike</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Size</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Qty</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Price</p></td>
    </tr>
    ${booking.bikeRentalDetails.map(ele => (
    `<tr>
      <td><p class="table-detail" style="margin-right: 20px;">${ele.bikeName}</p></td>
      <td><p class="table-detail">${ele.chooseBikeSize}</p></td>
      <td><p class="table-detail">${ele.userQty}</p></td>
      <td><p class="table-detail">$${ele.bikePrice}</p></td>
    </tr>`
  )).join('')
    }
    </table>
    </td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">$${booking.availability.price} x ${booking.totalRiders} travelers</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.totalRiders).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Discount</p></td>
      <td><p class="table-detail">${user.disc}%</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Tour Price</p></td>
      <td><p class="table-detail">$${((booking.availability.price * booking.totalRiders) - user.tourDiscount).toFixed(2)}</p></td>
    </tr>
    ${booking.bikeRentalDetails.map(ele => (
      `<tr>
      <td><p class="table-detail1">$${ele.bikePrice} x ${ele.userQty} bikes</p></td>
      <td><p class="table-detail">$${(ele.bikePrice * ele.userQty).toFixed(2)}</p></td>
    </tr>`
    )).join('')
    }
    <tr>
      <td><p class="table-detail1">Service Fee</p></td>
      <td><p class="table-detail">$${user.serviceFee}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${booking.cost.toFixed(2)}</b></td>
    </tr>
    </table>  
    <br>
      <p class="center-msg">Cheers,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  travellerRejectRequestTGBIKE: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="heading"><strong>Booking request declined</strong><p>
    <p class="name">Hi ${booking.traveller.firstName},</p>
    <p class="center-msg">Your booking request for ${booking.availability.tourName} has been <b>declined</b> and no payment has been processed.</p>
    <p class="center-msg">We invite you to search for another tour or guide in your desired destination or communicate with your guide (via our in-app chat) to consider booking a more convenient time.</p>
    <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Tour</p></td>
      <td><p class="table-detail1">Date & Time</p>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${booking.availability.tourName}</p></td>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Price</p></td>
      <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
      <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
      <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    <tr>
    <td colspan="2">
    <table style="border-top: 0;" class="table-booking">
      <tr>
      <td style="color: black; text-align: left; font-size: 16px; padding-bottom: 3%;" colspan="2"><b>Bike Rental Details</b></td>
      </tr>
      <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">Bike</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Size</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Qty</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Price</p></td>
    </tr>
    ${booking.bikeRentalDetails.map(ele => (
    `<tr>
      <td><p class="table-detail" style="margin-right: 20px;">${ele.bikeName}</p></td>
      <td><p class="table-detail">${ele.chooseBikeSize}</p></td>
      <td><p class="table-detail">${ele.userQty}</p></td>
      <td><p class="table-detail">$${ele.bikePrice}</p></td>
    </tr>`
  )).join('')
    }
    </table>
    </td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">$${booking.availability.price} x ${booking.totalRiders} travelers</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.totalRiders).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Discount</p></td>
      <td><p class="table-detail">${user.disc}%</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Tour Price</p></td>
      <td><p class="table-detail">$${((booking.availability.price * booking.totalRiders) - user.tourDiscount).toFixed(2)}</p></td>
    </tr>
    ${booking.bikeRentalDetails.map(ele => (
      `<tr>
      <td><p class="table-detail1">$${ele.bikePrice} x ${ele.userQty} bikes</p></td>
      <td><p class="table-detail">$${(ele.bikePrice * ele.userQty).toFixed(2)}</p></td>
    </tr>`
    )).join('')
    }
    <tr>
      <td><p class="table-detail1">Service Fee</p></td>
      <td><p class="table-detail">$${user.serviceFee}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${booking.cost.toFixed(2)}</b></td>
    </tr>
    </table>  
    <br>
      <p class="center-msg">Sincerely,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  travellerCancelRequestTGBIKE: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="heading"><strong>Upcoming tour canceled</strong><p>
    <p class="center-msg">Hi ${booking.traveller.firstName}, you’ve canceled your upcoming tour with “tour guide full name”. If this was due to a scheduling conflict, we encourage you to communicate with your guide to find a more suitable time.</p>
    <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Tour</p></td>
      <td><p class="table-detail1">Date & Time</p>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${booking.availability.tourName}</p></td>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Price</p></td>
      <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
      <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
      <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    <tr>
    <td colspan="2">
    <table style="border-top: 0;" class="table-booking">
      <tr>
      <td style="color: black; text-align: left; font-size: 16px; padding-bottom: 3%;" colspan="2"><b>Bike Rental Details</b></td>
      </tr>
      <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">Bike</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Size</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Qty</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Price</p></td>
    </tr>
    ${booking.bikeRentalDetails.map(ele => (
    `<tr>
      <td><p class="table-detail" style="margin-right: 20px;">${ele.bikeName}</p></td>
      <td><p class="table-detail">${ele.chooseBikeSize}</p></td>
      <td><p class="table-detail">${ele.userQty}</p></td>
      <td><p class="table-detail">$${ele.bikePrice}</p></td>
    </tr>`
  )).join('')
    }
    </table>
    </td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">$${booking.availability.price} x ${booking.totalRiders} travelers</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.totalRiders).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Discount</p></td>
      <td><p class="table-detail">${user.disc}%</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Tour Price</p></td>
      <td><p class="table-detail">$${((booking.availability.price * booking.totalRiders) - user.tourDiscount).toFixed(2)}</p></td>
    </tr>
    ${booking.bikeRentalDetails.map(ele => (
      `<tr>
      <td><p class="table-detail1">$${ele.bikePrice} x ${ele.userQty} bikes</p></td>
      <td><p class="table-detail">$${(ele.bikePrice * ele.userQty).toFixed(2)}</p></td>
    </tr>`
    )).join('')
    }
    <tr>
      <td><p class="table-detail1">Service Fee</p></td>
      <td><p class="table-detail">$${user.serviceFee}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${booking.cost.toFixed(2)}</b></td>
    </tr>
    </table>  
    <br>
      <p class="center-msg">Sincerely,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  travellerBookRequestTG: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="heading"><strong>Booking Request Sent</strong><p>
      <p class="name"><b>Hi ${booking.traveller.firstName}, your booking request was sent successfully.</b></p>
      <p class="center-msg">Please allow your Tour Guide to review the details of the booking request. Once confirmed, payment will be processed automatically on the day of your tour.</p>
      <p class="center-msg">You may now chat with your guide within the app.</p>
      <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Tour</p></td>
      <td><p class="table-detail1">Date & Time</p>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${booking.availability.tourName}</p></td>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Price</p></td>
      <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
      <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
      <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">$${booking.availability.price} x ${booking.totalRiders} travelers</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.totalRiders.toFixed(2))}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Discount</p></td>
      <td><p class="table-detail">${user.disc}%</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Tour Price</p></td>
      <td><p class="table-detail">$${((booking.availability.price * booking.totalRiders) - user.tourDiscount.toFixed(2))}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Service Fee</p></td>
      <td><p class="table-detail">$${user.serviceFee}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${booking.cost.toFixed(2)}</b></td>
    </tr>
    </table>  
    <br>
    <p class="center-msg">You won’t be charged until your request is confirmed.</p>
      <p class="center-msg">Cheers,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  travellerAcceptRequestTG: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="heading"><strong>Booking confirmed with Tour Guide</strong><p>
      <p class="name"><b>Hi ${booking.traveller.firstName}, your booking request for ${booking.availability.tourName}  has been confirmed and payment will be processed automatically on the day of your tour.</b></p>
      <p class="center-msg">Please communicate with your guide by using our in-app chat to discuss any additional details.</p>
      <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Tour</p></td>
      <td><p class="table-detail1">Date & Time</p>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${booking.availability.tourName}</p></td>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Price</p></td>
      <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
      <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
      <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">$${booking.availability.price} x ${booking.totalRiders} travelers</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.totalRiders.toFixed(2))}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Discount</p></td>
      <td><p class="table-detail">${user.disc}%</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Tour Price</p></td>
      <td><p class="table-detail">$${((booking.availability.price * booking.totalRiders) - user.tourDiscount.toFixed(2))}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Service Fee</p></td>
      <td><p class="table-detail">$${user.serviceFee}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${booking.cost.toFixed(2)}</b></td>
    </tr>
    </table>  
    <br>
    <p class="center-msg">Thanks for booking with us and have a great JAGZ Journey!</p>
      <p class="center-msg">Cheers,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  travellerMeetingReminderTG: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
      <p class="name">Hi ${booking.traveller.firstName},</p>
      <p class="center-msg">Just a reminder that your tour is coming up soon.</p>
      <p class="center-msg">Review the details of your booking below and chat with your guide via our in-app chat for additional information.</p>
      <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Tour</p></td>
      <td><p class="table-detail1">Date & Time</p>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${booking.availability.tourName}</p></td>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Price</p></td>
      <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
      <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
      <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">$${booking.availability.price} x ${booking.totalRiders} travelers</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.totalRiders.toFixed(2))}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Discount</p></td>
      <td><p class="table-detail">${user.disc}%</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Tour Price</p></td>
      <td><p class="table-detail">$${((booking.availability.price * booking.totalRiders) - user.tourDiscount.toFixed(2))}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Service Fee</p></td>
      <td><p class="table-detail">$${user.serviceFee}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${booking.cost.toFixed(2)}</b></td>
    </tr>
    </table>    
    <br>
      <p class="center-msg">Cheers,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  travellerRejectRequestTG: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="heading"><strong>Booking request declined</strong><p>
    <p class="name">Hi ${booking.traveller.firstName},</p>
    <p class="center-msg">Your booking request for ${booking.availability.tourName} has been <b>declined</b> and no payment has been processed.</p>
    <p class="center-msg">We invite you to search for another tour or guide in your desired destination or communicate with your guide (via our in-app chat) to consider booking a more convenient time.</p>
    <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Tour</p></td>
      <td><p class="table-detail1">Date & Time</p>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${booking.availability.tourName}</p></td>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Price</p></td>
      <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
      <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
      <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">$${booking.availability.price} x ${booking.totalRiders} travelers</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.totalRiders.toFixed(2))}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Discount</p></td>
      <td><p class="table-detail">${user.disc}%</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Tour Price</p></td>
      <td><p class="table-detail">$${((booking.availability.price * booking.totalRiders) - user.tourDiscount.toFixed(2))}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Service Fee</p></td>
      <td><p class="table-detail">$${user.serviceFee}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${booking.cost.toFixed(2)}</b></td>
    </tr>
    </table>    
    <br>
      <p class="center-msg">Sincerely,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  travellerCancelRequestTG: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="heading"><strong>Upcoming tour canceled</strong><p>
    <p class="center-msg">Hi ${booking.traveller.firstName}, you’ve canceled your upcoming tour with “tour guide full name”. If this was due to a scheduling conflict, we encourage you to communicate with your guide to find a more suitable time.</p>
    <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Tour</p></td>
      <td><p class="table-detail1">Date & Time</p>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${booking.availability.tourName}</p></td>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Price</p></td>
      <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
      <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
      <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">$${booking.availability.price} x ${booking.totalRiders} travelers</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.totalRiders.toFixed(2))}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Discount</p></td>
      <td><p class="table-detail">${user.disc}%</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Tour Price</p></td>
      <td><p class="table-detail">$${((booking.availability.price * booking.totalRiders) - user.tourDiscount.toFixed(2))}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Service Fee</p></td>
      <td><p class="table-detail">$${user.serviceFee}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${booking.cost.toFixed(2)}</b></td>
    </tr>
    </table>    
    <br>
      <p class="center-msg">Sincerely,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  travellerBookRequestIn: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="heading"><strong>Booking Request Sent</strong><p>
      <p class="name"><b>Hi ${booking.traveller.firstName}, your booking request was sent successfully.</b></p>
      <p class="center-msg">Please allow your Host to review the details of the booking request. Once confirmed, payment will be processed automatically on the day of your meeting.</p>
      <p class="center-msg">You may now chat with your host within the app.</p>
      <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Date & Time</p>
      <td><p class="table-detail1">Hours</p></td>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    <td><p class="table-detail">${booking.duration}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Price</p></td>
      <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
      <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
      <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1">$${booking.availability.price} x ${booking.duration} hours</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.duration).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Service Fee</p></td>
      <td><p class="table-detail">$${user.serviceFee}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${booking.cost.toFixed(2)}</b></td>
    </tr>
    </table>   
    <br>
    <p class="center-msg">You won’t be charged until your request is confirmed.</p>
      <p class="center-msg">Cheers,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  travellerAcceptRequestIn: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="heading"><strong>Booking confirmed with ${user.user}</strong><p>
      <p class="name"><b>Hi ${booking.traveller.firstName}, your booking request with ${user.user} has been confirmed and payment will be processed automatically on the day of your meeting.</b></p>
      <p class="center-msg">Please communicate with your Host via our in-app chat to discuss any additional details.</p>
      <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Date & Time</p>
      <td><p class="table-detail1">Hours</p></td>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    <td><p class="table-detail">${booking.duration}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Price</p></td>
      <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
      <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
      <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1">$${booking.availability.price} x ${booking.duration} hours</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.duration).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Service Fee</p></td>
      <td><p class="table-detail">$${user.serviceFee}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${booking.cost.toFixed(2)}</b></td>
    </tr>
    </table>     
    <br>
    <p class="center-msg">Thanks for booking with us and have a great JAGZ Journey!</p>
      <p class="center-msg">Cheers,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  travellerRejectRequestIn: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="heading"><strong>Booking request declined</strong><p>
      <p class="name">Hi ${booking.traveller.firstName},</p>
      <p class="center-msg">Your booking request with ${user.user} was <b>declined</b> and no payment was processed.</p>
      <p class="center-msg">We invite you to search for another Host in your desired destination or communicate with your Host using our in-app chat to consider booking a more convenient time.</p>
      <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Date & Time</p>
      <td><p class="table-detail1">Hours</p></td>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    <td><p class="table-detail">${booking.duration}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Price</p></td>
      <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
      <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
      <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1">$${booking.availability.price} x ${booking.duration} hours</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.duration).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Service Fee</p></td>
      <td><p class="table-detail">$${user.serviceFee}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${booking.cost.toFixed(2)}</b></td>
    </tr>
    </table>  
    <br>
      <p class="center-msg">Sincerely,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  travellerCancelRequestIn: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="heading"><strong>Upcoming meeting canceled</strong><p>
      <p class="center-msg">Hi ${booking.traveller.firstName}, you’ve canceled your upcoming meeting with ${user.user}. If this was due to a scheduling conflict, we encourage you to communicate with your host to find a more suitable time.</p>
      <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Date & Time</p>
      <td><p class="table-detail1">Hours</p></td>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    <td><p class="table-detail">${booking.duration}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Price</p></td>
      <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
      <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
      <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1">$${booking.availability.price} x ${booking.duration} hours</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.duration).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Service Fee</p></td>
      <td><p class="table-detail">$${user.serviceFee}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${booking.cost.toFixed(2)}</b></td>
    </tr>
    </table>  
    <br>
      <p class="center-msg">Sincerely,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  travellerMeetingReminderIn: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="name">Hi ${booking.traveller.firstName},</p>
    <p class="center-msg">Just a reminder that your booking with ${user.user} is coming up soon.</p>
    <p class="center-msg">Review the details of your booking below and chat with your Host via our in-app chat for additional information.</p>
    <table style="align: left; border-bottom: 0;" class="table-booking">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
    <tr>
    <td><p class="table-detail1">Date & Time</p>
    <td><p class="table-detail1">Hours</p></td>
    </td>
  </tr>
  <tr>
  <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
  <td><p class="table-detail">${booking.duration}</p></td>
  </tr>
  <tr>
    <td><p class="table-detail1">Location</p></td>
    <td><p class="table-detail1">Ride Choice</p></td>
  </tr>
  <tr>
    <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
    <td><p class="table-detail">${user.mailRideCategory}</p></td>
  </tr>
  <tr>
    <td><p class="table-detail1">Price</p></td>
    <td><p class="table-detail1">Travelers</p></td>
  </tr>
  <tr>
    <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
    <td><p class="table-detail">${booking.totalRiders}</p></td>
  </tr>
  </table>
  <table class="table-price">
  <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
  <tr>
    <td><p class="table-detail1">$${booking.availability.price} x ${booking.duration} hours</p></td>
    <td><p class="table-detail">$${(booking.availability.price * booking.duration).toFixed(2)}</p></td>
  </tr>
  <tr>
    <td><p class="table-detail1">Service Fee</p></td>
    <td><p class="table-detail">$${user.serviceFee}</p></td>
  </tr>
  <tr>
  <td colspan="2"><p style="color: black;"><hr></p></td>
  </tr>
  <tr>
    <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
    <td style="color: black; text-align: left; font-size: 18px;"><b>$${booking.cost.toFixed(2)}</b></td>
  </tr>
  </table>  
    <br>
      <p class="center-msg">Cheers,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  hostBookRequestIn: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="heading"><strong>Host Booking Request</strong><p>
      <p class="name"><b>Hi ${booking.user.firstName}, You have a new booking request from ${user.traveller}.</b></p>
      <p class="center-msg">Please review the details of the booking below and either Accept or Decline the meeting from within the JAGZ app.</p>
      <p class="center-msg">If you Accept this booking, payment will be processed automatically on the day of the meeting.</p>
      <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Date & Time</p>
      <td><p class="table-detail1">Hours</p></td>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    <td><p class="table-detail">${booking.duration}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Price</p></td>
      <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
      <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
      <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1">$${booking.availability.price} x ${booking.duration} hours</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.duration).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">JAGZ Commission</p></td>
      <td><p class="table-detail">-$${user.serviceFeeIN}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${user.userAmount}</b></td>
    </tr>
    </table>  
    <br>
      <p class="center-msg">Cheers,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  hostAcceptRequestIn: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="heading"><strong>Booking confirmed with ${user.traveller}</strong><p>
      <p class="name"><b>Awesome! You’ve just confirmed a booking with ${user.traveller}.</b></p>
      <p class="center-msg">Payment will be automatically processed on the day of the meeting. Please communicate with your Traveler via our in-app chat to discuss your meeting details and share any additional information.</p>
      <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Date & Time</p>
      <td><p class="table-detail1">Hours</p></td>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    <td><p class="table-detail">${booking.duration}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Price</p></td>
      <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
      <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
      <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1">$${booking.availability.price} x ${booking.duration} hours</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.duration).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">JAGZ Commission</p></td>
      <td><p class="table-detail">-$${user.serviceFeeIN}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${user.userAmount}</b></td>
    </tr>
    </table>  
    <br>
    <p class="center-msg">Thanks for using the JAGZ App and have a great time!</p>
      <p class="center-msg">Cheers,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  hostRejectRequestIn: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="heading"><strong>Booking request declined</strong><p>
      <p class="name">Hi ${booking.user.firstName},</p>
      <p class="center-msg">You’ve just declined a booking request with ${user.traveller}.</p>
      <p class="center-msg">If this was due to a scheduling conflict, we encourage you to communicate with the traveler to find a more suitable time.</p>
      <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Date & Time</p>
      <td><p class="table-detail1">Hours</p></td>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    <td><p class="table-detail">${booking.duration}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Price</p></td>
      <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
      <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
      <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1">$${booking.availability.price} x ${booking.duration} hours</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.duration).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">JAGZ Commission</p></td>
      <td><p class="table-detail">-$${user.serviceFeeIN}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${user.userAmount}</b></td>
    </tr>
    </table>    
    <br>
      <p class="center-msg">Sincerely,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  hostCancelRequestIn: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="heading"><strong>Upcoming meeting canceled</strong><p>
      <p class="center-msg">Hi ${booking.user.firstName}, your traveler ${user.traveller} has canceled their upcoming meeting with you.</p> 
      <p class="center-msg">We encourage you to communicate with the traveler to find a more suitable time.
      </p>
      <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Date & Time</p>
      <td><p class="table-detail1">Hours</p></td>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    <td><p class="table-detail">${booking.duration}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Price</p></td>
      <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
      <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
      <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1">$${booking.availability.price} x ${booking.duration} hours</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.duration).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">JAGZ Commission</p></td>
      <td><p class="table-detail">-$${user.serviceFeeIN}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${user.userAmount}</b></td>
    </tr>
    </table>    
    <br>
      <p class="center-msg">Sincerely,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  hostMeetingReminderIn: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="name">Hi ${booking.user.firstName},</p>
    <p class="center-msg">Just a reminder that you have a scheduled booking with ${booking.traveller.firstName} coming up soon.</p>
    <p class="center-msg">Review the details of the booking below and chat with your Traveler via our in-app chat to share any additional information.</p>
    <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Date & Time</p>
      <td><p class="table-detail1">Hours</p></td>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    <td><p class="table-detail">${booking.duration}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Price</p></td>
      <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
      <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
      <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1">$${booking.availability.price} x ${booking.duration} hours</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.duration).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">JAGZ Commission</p></td>
      <td><p class="table-detail">-$${user.serviceFeeIN}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${user.userAmount}</b></td>
    </tr>
    </table>  
    <br>
      <p class="center-msg">Cheers,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  hostPaidIn: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="name">Great news ${booking.user.firstName}, your traveler has paid for their booking with you!
    Please find the payment details below. Payouts are issued every following Tuesday after your traveler makes payment.
    </p>
    <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Date & Time</p>
      <td><p class="table-detail1">Hours</p></td>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    <td><p class="table-detail">${booking.duration}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Price</p></td>
      <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
      <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
      <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1">$${booking.availability.price} x ${booking.duration} hours</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.duration).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">JAGZ Commission</p></td>
      <td><p class="table-detail">-$${user.serviceFeeIN}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${user.userAmount}</b></td>
    </tr>
    </table>    
    <p class="center-msg">Thank you for using the JAGZ App and we enjoy the experience!</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  hostBookRequestTGBIKE: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="heading"><strong>Tour Booking Request</strong><p>
      <p class="name">Hi ${booking.user.firstName},</p>
      <p class="center-msg">You have a new booking request from ${user.traveller} for the tour: ${booking.availability.tourName}</p>
      <p class="center-msg">Please review the details of the booking below and either Accept or Decline the meeting from within the JAGZ app.</p>
      <p class="center-msg">If you Accept this booking, payment will be processed automatically on the day of the tour.</p>
      <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Tour</p></td>
      <td><p class="table-detail1">Date & Time</p>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${booking.availability.tourName}</p></td>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Price</p></td>
      <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
    <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
    <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    <tr>
    <td colspan="2">
    <table style="border-top: 0;" class="table-booking">
      <tr>
      <td style="color: black; text-align: left; font-size: 16px; padding-bottom: 3%;" colspan="2"><b>Bike Rental Details</b></td>
      </tr>
      <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">Bike</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Size</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Qty</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Price</p></td>
    </tr>
    ${booking.bikeRentalDetails.map(ele => (
    `<tr>
      <td><p class="table-detail" style="margin-right: 20px;">${ele.bikeName}</p></td>
      <td><p class="table-detail">${ele.chooseBikeSize}</p></td>
      <td><p class="table-detail">${ele.userQty}</p></td>
      <td><p class="table-detail">$${ele.bikePrice}</p></td>
    </tr>`
  )).join('')
    }
    </table>
    </td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">$${booking.availability.price} x ${booking.totalRiders} travelers</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.totalRiders).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Discount</p></td>
      <td><p class="table-detail">${user.disc}%</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Tour Price</p></td>
      <td><p class="table-detail">$${((booking.availability.price * booking.totalRiders) - user.tourDiscount).toFixed(2)}</p></td>
    </tr>
    ${booking.bikeRentalDetails.map(ele => (
      `<tr>
      <td><p class="table-detail1">$${ele.bikePrice} x ${ele.userQty} bikes</p></td>
      <td><p class="table-detail">$${(ele.bikePrice * ele.userQty).toFixed(2)}</p></td>
    </tr>`
    )).join('')
    }
    <tr>
      <td><p class="table-detail1">JAGZ Commission</p></td>
      <td><p class="table-detail">-$${user.serviceFeeIN}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${user.userAmount}</b></td>
    </tr>
    </table>
    <br>
      <p class="center-msg">Cheers,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  hostAcceptRequestTGBIKE: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="heading"><strong>Booking confirmed with ${user.traveller}</strong><p>
      <p class="name"><b>Awesome! You’ve just confirmed a booking with ${user.traveller} for the tour: ${booking.availability.tourName}</b></p>
      <p class="center-msg">Payment will be processed automatically on the day of the tour. Please communicate with your Traveler via our in-app chat to discuss your tour details and share any additional information..</p>
      <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Tour</p></td>
      <td><p class="table-detail1">Date & Time</p>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${booking.availability.tourName}</p></td>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
    <td><p class="table-detail1">Price</p></td>
    <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
    <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
    <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    <tr>
    <td colspan="2">
    <table style="border-top: 0;" class="table-booking">
      <tr>
      <td style="color: black; text-align: left; font-size: 16px; padding-bottom: 3%;" colspan="2"><b>Bike Rental Details</b></td>
      </tr>
      <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">Bike</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Size</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Qty</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Price</p></td>
    </tr>
    ${booking.bikeRentalDetails.map(ele => (
    `<tr>
      <td><p class="table-detail" style="margin-right: 20px;">${ele.bikeName}</p></td>
      <td><p class="table-detail">${ele.chooseBikeSize}</p></td>
      <td><p class="table-detail">${ele.userQty}</p></td>
      <td><p class="table-detail">$${ele.bikePrice}</p></td>
    </tr>`
  )).join('')
    }
    </table>
    </td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">$${booking.availability.price} x ${booking.totalRiders} travelers</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.totalRiders).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Discount</p></td>
      <td><p class="table-detail">${user.disc}%</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Tour Price</p></td>
      <td><p class="table-detail">$${((booking.availability.price * booking.totalRiders) - user.tourDiscount).toFixed(2)}</p></td>
    </tr>
    ${booking.bikeRentalDetails.map(ele => (
      `<tr>
      <td><p class="table-detail1">$${ele.bikePrice} x ${ele.userQty} bikes</p></td>
      <td><p class="table-detail">$${(ele.bikePrice * ele.userQty).toFixed(2)}</p></td>
    </tr>`
    )).join('')
    }
    <tr>
      <td><p class="table-detail1">JAGZ Commission</p></td>
      <td><p class="table-detail">-$${user.serviceFeeIN}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${user.userAmount}</b></td>
    </tr>
    </table>
    <br>
    <p class="center-msg">Thank you for using the JAGZ App and have a great time!</p>
      <p class="center-msg">Cheers,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  hostMeetingReminderTGBIKE: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
      <p class="name">Hi ${booking.user.firstName},</p>
      <p class="center-msg">Just a reminder that you have a scheduled tour with ${user.traveller} coming up soon.</p>
      <p class="center-msg">Review the details of the booking below and chat with your Traveler via our in-app chat to share any additional information.</p>
      <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Tour</p></td>
      <td><p class="table-detail1">Date & Time</p>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${booking.availability.tourName}</p></td>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
    <td><p class="table-detail1">Price</p></td>
    <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
    <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
    <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    <tr>
    <td colspan="2">
    <table style="border-top: 0;" class="table-booking">
      <tr>
      <td style="color: black; text-align: left; font-size: 16px; padding-bottom: 3%;" colspan="2"><b>Bike Rental Details</b></td>
      </tr>
      <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">Bike</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Size</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Qty</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Price</p></td>
    </tr>
    ${booking.bikeRentalDetails.map(ele => (
    `<tr>
      <td><p class="table-detail" style="margin-right: 20px;">${ele.bikeName}</p></td>
      <td><p class="table-detail">${ele.chooseBikeSize}</p></td>
      <td><p class="table-detail">${ele.userQty}</p></td>
      <td><p class="table-detail">$${ele.bikePrice}</p></td>
    </tr>`
  )).join('')
    }
    </table>
    </td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">$${booking.availability.price} x ${booking.totalRiders} travelers</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.totalRiders).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Discount</p></td>
      <td><p class="table-detail">${user.disc}%</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Tour Price</p></td>
      <td><p class="table-detail">$${((booking.availability.price * booking.totalRiders) - user.tourDiscount).toFixed(2)}</p></td>
    </tr>
    ${booking.bikeRentalDetails.map(ele => (
      `<tr>
      <td><p class="table-detail1">$${ele.bikePrice} x ${ele.userQty} bikes</p></td>
      <td><p class="table-detail">$${(ele.bikePrice * ele.userQty).toFixed(2)}</p></td>
    </tr>`
    )).join('')
    }
    <tr>
      <td><p class="table-detail1">JAGZ Commission</p></td>
      <td><p class="table-detail">-$${user.serviceFeeIN}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${user.userAmount}</b></td>
    </tr>
    </table>
    <br>
      <p class="center-msg">Cheers,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  hostRejectRequestTGBIKE: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="heading"><strong>Booking request declined</strong><p>
    <p class="name">Hi ${booking.user.firstName},</p>
    <p class="center-msg">You’ve just declined a booking request with ${user.traveller}.</p>
    <p class="center-msg">If this was due to a scheduling conflict, we encourage you to communicate with the traveler using our in-app chat to find a more suitable time.</p>
    <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Tour</p></td>
      <td><p class="table-detail1">Date & Time</p>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${booking.availability.tourName}</p></td>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
    <td><p class="table-detail1">Price</p></td>
    <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
    <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
    <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    <tr>
    <td colspan="2">
    <table style="border-top: 0;" class="table-booking">
      <tr>
      <td style="color: black; text-align: left; font-size: 16px; padding-bottom: 3%;" colspan="2"><b>Bike Rental Details</b></td>
      </tr>
      <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">Bike</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Size</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Qty</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Price</p></td>
    </tr>
    ${booking.bikeRentalDetails.map(ele => (
    `<tr>
      <td><p class="table-detail" style="margin-right: 20px;">${ele.bikeName}</p></td>
      <td><p class="table-detail">${ele.chooseBikeSize}</p></td>
      <td><p class="table-detail">${ele.userQty}</p></td>
      <td><p class="table-detail">$${ele.bikePrice}</p></td>
    </tr>`
  )).join('')
    }
    </table>
    </td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">$${booking.availability.price} x ${booking.totalRiders} travelers</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.totalRiders).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Discount</p></td>
      <td><p class="table-detail">${user.disc}%</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Tour Price</p></td>
      <td><p class="table-detail">$${((booking.availability.price * booking.totalRiders) - user.tourDiscount).toFixed(2)}</p></td>
    </tr>
    ${booking.bikeRentalDetails.map(ele => (
      `<tr>
      <td><p class="table-detail1">$${ele.bikePrice} x ${ele.userQty} bikes</p></td>
      <td><p class="table-detail">$${(ele.bikePrice * ele.userQty).toFixed(2)}</p></td>
    </tr>`
    )).join('')
    }
    <tr>
      <td><p class="table-detail1">JAGZ Commission</p></td>
      <td><p class="table-detail">-$${user.serviceFeeIN}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${user.userAmount}</b></td>
    </tr>
    </table>
    <br>
      <p class="center-msg">Sincerely,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  hostCancelRequestTGBIKE: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="heading"><strong>Upcoming tour canceled</strong><p>
    <p class="name">Hi ${booking.user.firstName},</p>
    <p class="center-msg">Hi ${booking.user.firstName}, your traveler ${user.traveller} has canceled their upcoming tour with you.</p>
    <p class="center-msg">We encourage you to communicate with the traveler to find a more suitable time.</p>
    <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Tour</p></td>
      <td><p class="table-detail1">Date & Time</p>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${booking.availability.tourName}</p></td>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
    <td><p class="table-detail1">Price</p></td>
    <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
    <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
    <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    <tr>
    <td colspan="2">
    <table style="border-top: 0;" class="table-booking">
      <tr>
      <td style="color: black; text-align: left; font-size: 16px; padding-bottom: 3%;" colspan="2"><b>Bike Rental Details</b></td>
      </tr>
      <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">Bike</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Size</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Qty</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Price</p></td>
    </tr>
    ${booking.bikeRentalDetails.map(ele => (
    `<tr>
      <td><p class="table-detail" style="margin-right: 20px;">${ele.bikeName}</p></td>
      <td><p class="table-detail">${ele.chooseBikeSize}</p></td>
      <td><p class="table-detail">${ele.userQty}</p></td>
      <td><p class="table-detail">$${ele.bikePrice}</p></td>
    </tr>`
  )).join('')
    }
    </table>
    </td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">$${booking.availability.price} x ${booking.totalRiders} travelers</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.totalRiders).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Discount</p></td>
      <td><p class="table-detail">${user.disc}%</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Tour Price</p></td>
      <td><p class="table-detail">$${((booking.availability.price * booking.totalRiders) - user.tourDiscount).toFixed(2)}</p></td>
    </tr>
    ${booking.bikeRentalDetails.map(ele => (
      `<tr>
      <td><p class="table-detail1">$${ele.bikePrice} x ${ele.userQty} bikes</p></td>
      <td><p class="table-detail">$${(ele.bikePrice * ele.userQty).toFixed(2)}</p></td>
    </tr>`
    )).join('')
    }
    <tr>
      <td><p class="table-detail1">JAGZ Commission</p></td>
      <td><p class="table-detail">-$${user.serviceFeeIN}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${user.userAmount}</b></td>
    </tr>
    </table>
    <br>
      <p class="center-msg">Sincerely,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  hostBookRequestTG: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="heading"><strong>Tour Booking Request</strong><p>
      <p class="name">Hi ${booking.user.firstName},</p>
      <p class="center-msg">You have a new booking request from ${user.traveller} for the tour: ${booking.availability.tourName}</p>
      <p class="center-msg">Please review the details of the booking below and either Accept or Decline the meeting from within the JAGZ app.</p>
      <p class="center-msg">If you Accept this booking, payment will be processed automatically on the day of the tour.</p>
      <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Tour</p></td>
      <td><p class="table-detail1">Date & Time</p>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${booking.availability.tourName}</p></td>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
    <td><p class="table-detail1">Price</p></td>
    <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
    <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
    <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">$${booking.availability.price} x ${booking.totalRiders} travelers</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.totalRiders).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Discount</p></td>
      <td><p class="table-detail">${user.disc}%</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Tour Price</p></td>
      <td><p class="table-detail">$${((booking.availability.price * booking.totalRiders) - user.tourDiscount).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">JAGZ Commission</p></td>
      <td><p class="table-detail">-$${user.serviceFeeIN}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${user.userAmount}</b></td>
    </tr>
    </table>  
    <br>
      <p class="center-msg">Cheers,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  hostAcceptRequestTG: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="heading"><strong>Booking confirmed with Traveller name</strong><p>
      <p class="name"><b>Awesome! You’ve just confirmed a booking with ${user.traveller} for the tour: ${booking.availability.tourName}</b></p>
      <p class="center-msg">Payment will be processed automatically on the day of the tour. Please communicate with your Traveler via our in-app chat to discuss your tour details and share any additional information..</p>
      <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Tour</p></td>
      <td><p class="table-detail1">Date & Time</p>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${booking.availability.tourName}</p></td>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
    <td><p class="table-detail1">Price</p></td>
    <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
    <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
    <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">$${booking.availability.price} x ${booking.totalRiders} travelers</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.totalRiders).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Discount</p></td>
      <td><p class="table-detail">${user.disc}%</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Tour Price</p></td>
      <td><p class="table-detail">$${((booking.availability.price * booking.totalRiders) - user.tourDiscount).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">JAGZ Commission</p></td>
      <td><p class="table-detail">-$${user.serviceFeeIN}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${user.userAmount}</b></td>
    </tr>
    </table> 
    <br>
    <p class="center-msg">Thank you for using the JAGZ App and have a great time!</p>
      <p class="center-msg">Cheers,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  hostMeetingReminderTG: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
      <p class="name">Hi ${booking.user.firstName},</p>
      <p class="center-msg">Just a reminder that you have a scheduled tour with ${user.traveller} coming up soon.</p>
      <p class="center-msg">Review the details of the booking below and chat with your Traveler via our in-app chat to share any additional information.</p>
      <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Tour</p></td>
      <td><p class="table-detail1">Date & Time</p>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${booking.availability.tourName}</p></td>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
    <td><p class="table-detail1">Price</p></td>
    <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
    <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
    <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">$${booking.availability.price} x ${booking.totalRiders} travelers</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.totalRiders).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Discount</p></td>
      <td><p class="table-detail">${user.disc}%</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Tour Price</p></td>
      <td><p class="table-detail">$${((booking.availability.price * booking.totalRiders) - user.tourDiscount).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">JAGZ Commission</p></td>
      <td><p class="table-detail">-$${user.serviceFeeIN}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${user.userAmount}</b></td>
    </tr>
    </table>  
    <br>
      <p class="center-msg">Cheers,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  hostRejectRequestTG: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="heading"><strong>Booking request declined</strong><p>
    <p class="name">Hi ${booking.user.firstName},</p>
    <p class="center-msg">You’ve just declined a booking request with ${user.traveller}.</p>
    <p class="center-msg">If this was due to a scheduling conflict, we encourage you to communicate with the traveler using our in-app chat to find a more suitable time.</p>
    <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Tour</p></td>
      <td><p class="table-detail1">Date & Time</p>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${booking.availability.tourName}</p></td>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
    <td><p class="table-detail1">Price</p></td>
    <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
    <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
    <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">$${booking.availability.price} x ${booking.totalRiders} travelers</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.totalRiders).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Discount</p></td>
      <td><p class="table-detail">${user.disc}%</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Tour Price</p></td>
      <td><p class="table-detail">$${((booking.availability.price * booking.totalRiders) - user.tourDiscount).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">JAGZ Commission</p></td>
      <td><p class="table-detail">-$${user.serviceFeeIN}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${user.userAmount}</b></td>
    </tr>
    </table> 
    <br>
      <p class="center-msg">Sincerely,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  hostCancelRequestTG: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="heading"><strong>Upcoming tour canceled</strong><p>
    <p class="center-msg">Hi ${booking.user.firstName}, your traveler ${user.traveller} has canceled their upcoming tour with you.</p>
    <p class="center-msg">We encourage you to communicate with the traveler to find a more suitable time.</p>
    <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Tour</p></td>
      <td><p class="table-detail1">Date & Time</p>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${booking.availability.tourName}</p></td>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
    <td><p class="table-detail1">Price</p></td>
    <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
    <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
    <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">$${booking.availability.price} x ${booking.totalRiders} travelers</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.totalRiders).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Discount</p></td>
      <td><p class="table-detail">${user.disc}%</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Tour Price</p></td>
      <td><p class="table-detail">$${((booking.availability.price * booking.totalRiders) - user.tourDiscount).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">JAGZ Commission</p></td>
      <td><p class="table-detail">-$${user.serviceFeeIN}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${user.userAmount}</b></td>
    </tr>
    </table> 
    <br>
      <p class="center-msg">Sincerely,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  hostPaidTG: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="name">Great news ${booking.user.firstName}, your traveler has paid for their booking with you!
    Please find the payment details below. Payouts are issued every following Tuesday after your traveler makes payment.</p>
    <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Tour</p></td>
      <td><p class="table-detail1">Date & Time</p>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${booking.availability.tourName}</p></td>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
    <td><p class="table-detail1">Price</p></td>
    <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
    <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
    <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">$${booking.availability.price} x ${booking.totalRiders} travelers</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.totalRiders).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Discount</p></td>
      <td><p class="table-detail">${user.disc}%</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Tour Price</p></td>
      <td><p class="table-detail">$${((booking.availability.price * booking.totalRiders) - user.tourDiscount).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">JAGZ Commission</p></td>
      <td><p class="table-detail">-$${user.serviceFeeIN}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${user.userAmount}</b></td>
    </tr>
    </table> 
    <p class="center-msg">Thank you for using the JAGZ App and we enjoy the experience!</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  hostPaidTGBIKE: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
    <p class="name">Great news ${booking.user.firstName}, your traveler has paid for their booking with you!
    Please find the payment details below. Payouts are issued every following Tuesday after your traveler makes payment.</p>
    <table style="align: left; border-bottom: 0;" class="table-booking">
      <tr><td style="color: #EE6026; text-align: left; font-size: 20px; padding-bottom: 3%;" colspan="2"><b>Booking Details</b></td></tr>
      <tr>
      <td><p class="table-detail1">Tour</p></td>
      <td><p class="table-detail1">Date & Time</p>
      </td>
    </tr>
    <tr>
    <td><p class="table-detail">${booking.availability.tourName}</p></td>
    <td><p class="table-detail">${user.mailDate} ${booking.time}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Location</p></td>
      <td><p class="table-detail1">Ride Choice</p></td>
    </tr>
    <tr>
      <td><p class="table-detail" style="margin-right: 20px;">${booking.availability.locationName}</p></td>
      <td><p class="table-detail">${user.mailRideCategory}</p></td>
    </tr>
    <tr>
    <td><p class="table-detail1">Price</p></td>
    <td><p class="table-detail1">Travelers</p></td>
    </tr>
    <tr>
    <td><p class="table-detail">$${booking.availability.price.toFixed(2)}</p></td>
    <td><p class="table-detail">${booking.totalRiders}</p></td>
    </tr>
    <tr>
    <td colspan="2">
    <table style="border-top: 0;" class="table-booking">
      <tr>
      <td style="color: black; text-align: left; font-size: 16px; padding-bottom: 3%;" colspan="2"><b>Bike Rental Details</b></td>
      </tr>
      <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">Bike</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Size</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Qty</p></td>
      <td><p class="table-detail1" style="margin-right: 10px;">Price</p></td>
    </tr>
    ${booking.bikeRentalDetails.map(ele => (
    `<tr>
      <td><p class="table-detail" style="margin-right: 20px;">${ele.bikeName}</p></td>
      <td><p class="table-detail">${ele.chooseBikeSize}</p></td>
      <td><p class="table-detail">${ele.userQty}</p></td>
      <td><p class="table-detail">$${ele.bikePrice}</p></td>
    </tr>`
  )).join('')
    }
    </table>
    </td>
    </tr>
    </table>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price breakdown</b></td></tr>
    <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">$${booking.availability.price} x ${booking.totalRiders} travelers</p></td>
      <td><p class="table-detail">$${(booking.availability.price * booking.totalRiders).toFixed(2)}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Discount</p></td>
      <td><p class="table-detail">${user.disc}%</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Tour Price</p></td>
      <td><p class="table-detail">$${((booking.availability.price * booking.totalRiders) - user.tourDiscount).toFixed(2)}</p></td>
    </tr>
    ${booking.bikeRentalDetails.map(ele => (
      `<tr>
      <td><p class="table-detail1">$${ele.bikePrice} x ${ele.userQty} bikes</p></td>
      <td><p class="table-detail">$${(ele.bikePrice * ele.userQty).toFixed(2)}</p></td>
    </tr>`
    )).join('')
    }
    <tr>
      <td><p class="table-detail1">JAGZ Commission</p></td>
      <td><p class="table-detail">-$${user.serviceFeeIN}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${user.userAmount}</b></td>
    </tr>
    </table>
    <p class="center-msg">Thank you for using the JAGZ App and we enjoy the experience!</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  paymentNotifyMasterMerchant: (user, booking) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .table-booking {
      width: 100%;
      background-color: #f2f4f9;
    }
    .table-price {
      width: 100%;
      margin-top: 5%;
    }
    td {
      padding-left: 5px;
      padding-right: 5px;
    }
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 36px;
        margin-top: 0px;
        color: #000000;
        opacity: 1;
      }
      .name {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 20px;
        color: #000000;
        opacity: 1;
      }
      .center-msg {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .table-detail {
        text-align: left;
        font-size: 20px;
        padding: 0px;
        color: #929292;
        opacity: 1;
      }
      .table-detail1 {
        text-align: left;
        margin: 0px;
        padding: 0px;
        font-size: 20px;
        color: black;
        opacity: 1;
      }
      .content-box {
        background: #F2F4F9;
        border-radius: 8px;
        opacity: 1;
        margin-left: 200px;
        margin-right: 200px;
      }
      .center-msg-detail {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        color: #2E2E2E;
        padding-top: 20px;
      }
      .center-detail-time {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: #A2A2A2;
        padding: 0px;
        margin-top: 0px;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
      }
      .center-detail-icon {
      text-align: left;
      letter-spacing: 0px;
      font-size: 16px;
      color: #565656;
      opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <div class="content-text" style="margin-right: 10%; margin-left: 3%">
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png" alt="">
    <hr class="jagzlogo">
      <p class="name">Hi David,</p>
      <p class="center-msg">Just a reminder that you have to make payment to the user ${user.user}.</p>
      <p class="center-msg">Review the details of the payment below.</p>
    <table class="table-price">
    <tr><td style="color: #EE6026; text-align: left; font-size: 20px;" colspan="2"><b>Price Details</b></td></tr>
    <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">Traveler Name</p></td>
      <td><p class="table-detail">${user.traveller}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Host/Tourguide Name</p></td>
      <td><p class="table-detail">${user.user}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">Booking/Tour Scheduled Date</p></td>
      <td><p class="table-detail">${user.mailDate}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1" style="margin-right: 10px;">ServiceFee(Traveler)</p></td>
      <td><p class="table-detail">$${user.serviceFee}</p></td>
    </tr>
    <tr>
      <td><p class="table-detail1">ServiceFee(Host/Tourguide)</p></td>
      <td><p class="table-detail">$${user.serviceFeeIN}</p></td>
    </tr>
    <tr>
    <td colspan="2"><p style="color: black;"><hr></p></td>
    </tr>
    <tr>
      <td style="color: black; text-align: left; font-size: 18px;"><b>Total Amount</b></td>
      <td style="color: black; text-align: left; font-size: 18px;"><b>$${user.userAmount}</b></td>
    </tr>
    </table>  
    <br>
      <p class="center-msg">Cheers,</p>
      <p class="center-msg">The JAGZ TEAM</p>
    </div>
     <center>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
  </div>
  </body>
  </html>`,
  completeProfile: user => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .heading {
      text-align: center;
      font-weight: 700;
      font-family: "Roboto";
      letter-spacing: 0.68px;
      font-size: 36px;
      margin-top: 0px;
      color: #000000;
      opacity: 1;
    }
    .name {
      text-align: center;
      font-family: "Roboto";
      letter-spacing: 0.68px;
      font-size: 20px;
      color: #000000;
      opacity: 1;
    }
    .center-msg {
      text-align: center;
      font-family: "Roboto";
      font-size: 20px;
      letter-spacing: 0.34px;
      color: #929292;
      opacity: 1;
    }
    .center-msg-label {
      text-align: center;
      font-family: "Roboto";
      font-size: 22px;
      letter-spacing: 0.34px;
      color: black;
      opacity: 1;
    }
    .center-msg-second {
      text-align: center;
      font-family: "Roboto";
      font-size: 16px;
      letter-spacing: 0.34px;
      color: #3E3E3E;
      opacity: 1;
    }
    .content-box {
      background: #F2F4F9;
      border-radius: 8px;
      font-family: "Roboto";
      opacity: 1;
      margin-left: 200px;
      margin-right: 200px;
    }
    .center-msg-detail {
      text-align: left;
      font-size: 16px;
      font-family: "Roboto";
      letter-spacing: 0px;
      color: #2E2E2E;
      padding-top: 20px;
    }
    .center-detail-time {
      text-align: left;
      font-size: 14px;
      letter-spacing: 0px;
      color: #A2A2A2;
      font-family: "Roboto";
      padding: 0px;
      margin-top: 0px;
    }
    .jagzlogo{
      border: 1px solid #EE6026;
    }
    .center-detail-icon {
    text-align: left;
    letter-spacing: 0px;
    font-size: 16px;
    font-family: "Roboto";
    color: #565656;
    opacity: 1;
    }
    .app-link {
      background-color: #F27427;
      color: black;
      padding: 14px 25px;
      font-family: "Roboto";
      text-align: center;
      text-decoration: none;
      display: inline-block;
    }
  </style>
  </head>
  <body>
  <div>
  <center>
  <div class="content-text" style="margin-right: 10%; margin-left: 3%">
  <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/CmGF2Yb4lAXSB.png" width="20%" height="10%" alt="">
  <p class="heading" style="margin-top: 2%;"><strong>Join our growing community of friendly Hosts and Guides and start making money connecting with Travelers visiting your town!</strong></p>
      <p class="center-msg">You’ve taken the first steps and created a Host profile, now there are just a few more questions to answer. Once completed, your profile will be visible to be booked by anyone traveling to your area.</p>
      
      <p class="center-msg"><a href="https://jagz.app.link/jagzEmail" target="_blank" class="app-link" style="color: white;">Finish Host Setup!</a></p>
      <p class="center-msg-label" style="font-size: 25px;"><strong>Complete Profile Checklist</strong></p>
      
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/agh0vnMZmf330.png" width="30%" height="30%" alt="">
      <p class="center-msg-label" style="margin-top: 0px;">Set your location</p>
      
      <p class="center-msg" style="margin-bottom: 7%;"><a href="https://jagz.app.link/jagzEmail" target="_blank" class="app-link" style="color: white;">Finish Host Setup!</a></p>
      <img src="https://mtbguru.s3.amazonaws.com/gallery/AYRWnn7WJxM0D.png" width="30%" height="30%" alt="">
      <p class="center-msg-label">Write a personable Bio</p>
      <p class="center-msg">Introduce yourself to the JAGZ community and let traveling MTBers or road cyclists know a little bit more about yourself</p>
      
      <p class="center-msg"><a href="https://jagz.app.link/jagzEmail" target="_blank" class="app-link" style="color: white;">Finish Host Setup!</a></p>
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/PIndou7j5Dyf0.png" width="30%" height="30%" alt="">
      <p class="center-msg-label" style="margin-top: 0px;">Set your price</p>
      <p class="center-msg">Set an hourly rate or list your time for free…but make sure to fill this out so that JAGZ users can find you in the app</p>
      
      <p class="center-msg"><a href="https://jagz.app.link/jagzEmail" target="_blank" class="app-link" style="color: white;">Finish Host Setup!</a></p>
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/agh0vnMZmf330.png" width="30%" height="30%"  alt="">
      <p class="center-msg-label" style="margin-top: 0px;">Set your availability</p>
      <p class="center-msg">Choose what days and times you prefer to be booked!</p>
     
      <p class="center-msg"><a href="https://jagz.app.link/jagzEmail" target="_blank" class="app-link" style="color: white;">Finish Host Setup!</a></p>
      </div>
    <br/>
    <div>
    <div>
      <p>
      <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
      <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
      <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
      <a href="https://jagzapp.com/" style="padding: 2%">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
      </p>
      </div>
      </center>
    </div>
  </div>
  </body>
  </html>  
  `,
  chatSummary: (user, messages) => `<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      .heading {
        text-align: left;
        font-weight: 500;
        letter-spacing: 0.68px;
        font-size: 40px;
        color: #000000;
        opacity: 1;
        margin-left: 5%;
        margin-right: 10%;
        margin-bottom: 0;
        margin-top: 0;
      }
      .paratext {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 14px;
        color: #000000;
        opacity: 1;
        margin-left: 5%;
        margin-right: 10%;
      }
      .paraimg {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 14px;
        color: #000000;
        opacity: 1;
        margin-left: 2%;
        margin-right: 10%;
      }
      .center-msg {
        text-align: center;
        font-size: 16px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
      .center-msg-second {
        text-align: left;
        font-size: 16px;
        color: #F27427;
        text-transform: uppercase;
        letter-spacing: 0.34px;
        opacity: 1;
        margin-left: 5%;
        margin-right: 10%;
      }
      .jagzlogo{
        border: 1px solid #EE6026;
        margin-left: 5%;
        margin-right: 10%;
      }
      .app-link {
        background-color: #F27427;
        color: black;
        padding: 14px 25px;
        text-align: center;
        font-size: 24px;
        text-decoration: none;
        display: inline-block;
      }
      .main-div{
        width: 100%;
        padding: 24px 0 16px 0;
        background-color: #f5f5f5;
        text-align: center;
      }
      .sub-div {
        text-align: left;
        letter-spacing: 0.68px;
        font-size: 14px;
        color: #000000;
        opacity: 1;
        margin-left: 10%;
        margin-right: 10%;
      }
    </style>
  </head>
  <body>
  <div class="main-div">
  <div class="sub-div" style="padding:24px 32px 24px 32px; background:#fff; border-right:1px solid #eaeaea; border-left:1px solid #eaeaea" dir="ltr">
      <p class="paratext">
      <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/CmGF2Yb4lAXSB.png" width="30%" alt=""></p>
      <hr class="jagzlogo">
      <p class="paratext"><strong>${user.firstName} ${user.lastName} messaged you on <span style="color: #EE6026;">JAGZ</span> while you are away</strong></p>
      <hr style="margin-left: 5%; margin-right: 10%; border: 1px solid #F5F5F5;">
      <br/>
      <table>
      <tbody>
      ${messages.map(ele => (
    `<tr><td style="vertical-align:top; width:10%; padding-bottom:20px">
      <div style="max-height:77px; margin-left: 30px; margin-right:15px; height:48px; width:48px; background:#f0f0f0; overflow:hidden">
      <img src="${ele.profile}" style="height:48px; width:48px; border-radius:50%" alt=""></div></td>
      <td style="vertical-align:top;padding-bottom:20px"><div style="display:inline-block;padding:0 15px 0 0;font-size:13px;line-height:18px;width:100%"><strong style="font-size:13px;font-weight:bolder;color:#222">${ele.name}</strong><p style="margin:0"><span style="font-size:13px;font-weight:normal;color:#222"></span></p>
      <div style="white-space:pre-wrap">${ele.message}</div><p></p></div>
      </td></tr>`
  )).join('')}
      </tbody>
      </table>
      <p class="paratext"><a href="https://jagz.app.link/jagz" target="_blank" class="app-link" style="color: white;">Open in JAGZ!</a></p>
    <center>
    <div>
          <p>
            <a href="https://www.facebook.com/jagzapp/" style="padding: 2%">
            <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
            <a href="https://www.instagram.com/jagz_app/" style="padding: 2%">
            <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
            <a href="https://jagzapp.com/" style="padding: 2%">
            <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
          </p>
        </div>
        </center>
  </div>
  </div>
  </body>
  </html>  
  `,
};
