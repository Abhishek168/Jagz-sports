export default {
  Welcome: user => `<html lang="en">
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
      <div class="content-text" style="margin-top: 0px;">
      <p class="heading">Welcome to<p>
      <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png">
        <p class="name">Hey ${user}</p>
        <p class="center-msg">Welcome to JAGZ, a global biking experience!</p>
        <p class="center-msg">We’re excited to have you on board and we’ve got a lot of great features in store…</p>
        <p class="center-msg">Get started by searching for Tour Guides or Hosts in your favorite destination 
        and book your next MTB or Cycling  adventure today!</p>
      </div>
        <div style="display: flex; flex-wrap: wrap; justify-content: center; margin-left: 38%;">
          <p style="padding: 2%">
            <a href="https://www.facebook.com/jagzmtb">
            <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
          </p>
          <p style="padding: 2%">
            <a href="https://www.instagram.com/jagz_app/">
            <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
          </p>
          <p style="padding: 2%">
            <a href="http://jagzsports.com/">
            <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
          </p>
        </div>
      </div>
      </center>
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
      <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png">
      <div class="content-text">
        <p class="heading">Verify your email<p>
        <img src="https://mtbguru.s3.amazonaws.com/gallery/oubjSbIGSkKXw.png">
        <p class="name">Dear ${user.greetingName}</p>
        <p class="center-msg">We’re thrilled to welcome you to the JAGZ community!</p>
        <p class="center-msg">Please verify your email in order to get started.</p>
        <p class="center-msg-second">Your JAGZ ID Verification code:</p>
        <p style="text-align: center;
        font-size: 24px;
        letter-spacing: 0.54px;
        color: #EE6026;
        opacity: 1; 
        width: 82px;
        height: 45px;">${user.code}</p>
        <p style="text-align: center;
        letter-spacing: 0px;
        color: #929292;
        opacity: 1;">Have a question? If you need any help let us know.</p>
        <p style="text-align: center;
        letter-spacing: 0px;
        color: #929292;
        opacity: 1;">You can reach us directly at: 
        <a href="" class="text-dark" style="text-align: center;
        letter-spacing: 0px;
        text-decoration: none;
        color: black;">support@jagzsports.com</a></p>
        <p style="text-align: right;
        letter-spacing: 0px;
        color: #565656;
        font-size: 20px;
        opacity: 1;">Thanks,</p>
        <p style="text-align: right;
        letter-spacing: 0px;
        font-size: 20px;
        color: #565656;
        opacity: 1;">The JAGZ TEAM</p>
        <div style="display: flex; flex-wrap: wrap; justify-content: center; margin-left: 38%;">
          <p style="padding: 2%">
            <a href="https://www.facebook.com/jagzmtb">
            <img src="https://mtbguru.s3.amazonaws.com/gallery/HGq1Yp42CuJIm.png" alt="website" width="30px"></a>
          </p>
          <p style="padding: 2%">
            <a href="https://www.instagram.com/jagz_app/">
            <img src="https://mtbguru.s3.amazonaws.com/gallery/0QoJLG4y0voTI.png" alt="website" width="30px"></a>
          </p>
          <p style="padding: 2%">
            <a href="http://jagzsports.com/">
            <img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/fJNUtSDH2yWT2.png" alt="website" width="30px"></a>
          </p>
        </div>
      </div>
      </center>
    </div>
    </body>
    </html>  
    `,
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
      <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png">
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
      </center>
    </div>
    </body>
    </html>  
    `,
  requestBookingIndividual: user => `<html lang="en">
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
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
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
    <center>
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png">
    <div class="content-text">
      <p class="heading">Host Booking Request<p>
      <img src="https://mtbguru.s3.amazonaws.com/gallery/kaPujRT6SfQdM.png">
      <p class="name">Hi ${user.greetingName}</p>
      <p class="center-msg">You have a new Booking Request with ${user.traveller}.</p>
      <p class="center-msg">Please review the details of the booking below and either Accept or Decline the meeting from within the JAGZ app.</p>
      <p clas="center-msg">If you Accept this booking, payment will be processed automatically.</p>
      <div style="max-width: 585px; background: #f2f4f9; border-radius: 8px; padding: 16px; margin: 20px auto;">
        <div style="display: flex; align-items: center;">
            <figure style="margin: 0;">
                <img src="${user.profilePic}" alt="profile" style="width: 48px;height: 48px;border-radius: 50%;">
            </figure>
            <div style="padding-left: 16px;">
                <p style="font-size: 16px; color: #2E2E2E; text-align: left;">${user.traveller} is <strong>requested</strong> booking for :</p>
            </div>
        </div>
        <div>
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap;">
                <p
                    style="font-size: 16px; color: #565656; display: flex; align-self: center; margin-top: 18px;margin-right: 4px; margin-left: 4px;">
                    <span style="padding-right: 8px;"><img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/Zn2iC7EO0bMJ9.png" alt="clock"
                            style="width: 22px;"></span>${user.rideType}</p>
                <p
                    style="font-size: 16px; color: #565656; display: flex; align-self: center; margin-top: 18px;margin-right: 4px; margin-left: 4px;">
                    <span style="padding-right: 8px;"><img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/Gv7ORcRSmCl4f.png" alt="clock" style="width: 18px;"></span>${user.time}</p>
                <p
                    style="font-size: 16px; color: #565656; display: flex; align-self: center; margin-top: 18px;margin-right: 4px; margin-left: 4px;">
                    <span style="padding-right: 8px;"><img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/rOepznRD0BH8P.png" alt="clock" style="width: 18px;"></span>${user.selectedDate}</p>
                <p
                    style="font-size: 16px; color: #565656; display: flex; align-self: center; margin-top: 18px;margin-right: 4px; margin-left: 4px;">
                    <span style="padding-right: 8px;"><img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/QdNLSLgpxlyUB.png" alt="clock" style="width: 18px;"></span>${user.duration}
                    Hours
                </p>
                <p
                    style="font-size: 16px; color: #565656; display: flex; align-self: center; margin-top: 18px;margin-right: 4px; margin-left: 4px;">
                    <span style="padding-right: 8px;">$</span>${user.price}
                </p>
            </div>

        </div>
    </div>
      <p style="text-align: right;
      letter-spacing: 0px;
      color: #565656;
      font-size: 20px;
      opacity: 1;">Cheers,</p>
      <p style="text-align: right;
      letter-spacing: 0px;
      font-size: 20px;
      color: #565656;
      opacity: 1;">The JAGZ TEAM</p>
    </div>
    </center>
  </div>
  </body>
  </html>`,
  requestBooking: user => `<html lang="en">
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
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
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
    <center>
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png">
    <div class="content-text">
      <p class="heading">Host Booking Request<p>
      <img src="https://mtbguru.s3.amazonaws.com/gallery/kaPujRT6SfQdM.png">
      <p class="name">Hi ${user.greetingName}</p>
      <p class="center-msg">You have a new Booking Request with ${user.traveller} for : </p>
      <div style="max-width: 585px; background: #f2f4f9; border-radius: 8px; padding: 16px; margin: 20px auto;">
        <div style="display: flex; align-items: center;">
            <figure style="margin: 0;">
                <img src="${user.profilePic}" alt="profile" style="width: 48px;height: 48px;border-radius: 50%;">
            </figure>
            <div style="padding-left: 16px;">
                <p style="font-size: 16px; color: #2E2E2E; text-align: left;">${user.traveller} is <strong>request</strong> booking for :</p>
                <p style="font-size: 14px; color: #565656; display: flex; align-items: center;"><span
                        style="padding-right: 8px; width: 14px; height: 14px;"><img src="https://mtbguru.s3.amazonaws.com/gallery/hriEn3GRRwDa2.png"
                            alt="Name" style="width: 22px;"></span>${user.tourName}</p>
            </div>
        </div>
        <div>
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap;">
                <p
                    style="font-size: 16px; color: #565656; display: flex; align-self: center; margin-top: 18px;margin-right: 4px; margin-left: 4px;">
                    <span style="padding-right: 8px;"><img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/Zn2iC7EO0bMJ9.png" alt="clock"
                            style="width: 22px;"></span>${user.rideType}</p>
                <p
                    style="font-size: 16px; color: #565656; display: flex; align-self: center; margin-top: 18px;margin-right: 4px; margin-left: 4px;">
                    <span style="padding-right: 8px;"><img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/Gv7ORcRSmCl4f.png" alt="clock" style="width: 18px;"></span>${user.time}</p>
                <p
                    style="font-size: 16px; color: #565656; display: flex; align-self: center; margin-top: 18px;margin-right: 4px; margin-left: 4px;">
                    <span style="padding-right: 8px;"><img src="https://mtbguru.s3.us-east-2.amazonaws.com/gallery/rOepznRD0BH8P.png" alt="clock" style="width: 18px;"></span>${user.selectedDate}</p>
                    <p
                    style="font-size: 16px; color: #565656; display: flex; align-self: center; margin-top: 18px;margin-right: 4px; margin-left: 4px;">
                    <span style="padding-right: 8px;">$</span>${user.price}
                </p>
            </div>
        </div>
    </div>
      <p class="center-msg">View the details of the booking request by visiting your account to <span style="color: #565656">Accept</span> or <span style="color: #565656">Decline</span> the meeting. 
      You may also chat with the Traveler now to discuss your plans.</p>
      <p style="text-align: right;
      letter-spacing: 0px;
      color: #565656;
      font-size: 20px;
      opacity: 1;">Cheers,</p>
      <p style="text-align: right;
      letter-spacing: 0px;
      color: #565656;
      font-size: 20px;
      opacity: 1;">The JAGZ TEAM</p>
    </div>
    </center>
  </div>
  </body>
  </html>`,
  acceptBooking: user => `<html lang="en">
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
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <center>
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png">
    <div class="content-text">
      <p class="heading">Traveler Booking Request<p>
      <img src="https://mtbguru.s3.amazonaws.com/gallery/1rcBFLFUgga4n.png">
      <p class="name">Hi ${user.greetingName}</p>
      <p class="center-msg">Your booking request with <span style="color: #565656">${user.user}</span> for <span style="color: #565656">${user.selectedDate}</span> has been <span style="color: #EE6026;">accepted!</span></p>
      <p class="center-msg">Payment will be proceeded within the 24 hours of booking before the meeting.</p>
      <p class="center-msg" style="color: #565656">Thanks for booking with us and have a great JAGZ journey!</p>
      <p style="text-align: right;
      letter-spacing: 0px;
      color: #565656;
      font-size: 20px;
      opacity: 1;">Cheers,</p>
      <p style="text-align: right;
      letter-spacing: 0px;
      color: #565656;
      font-size: 20px;
      opacity: 1;">The JAGZ TEAM</p>
    </div>
    </center>
  </div>
  </body>
  </html>`,
  rejectBooking: user => `<html lang="en">
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
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <center>
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png">
    <div class="content-text">
      <p class="heading">Traveler Booking Request<p>
      <img src="https://mtbguru.s3.amazonaws.com/gallery/NedIPaUagLcCl.png">
      <p class="name">Hi ${user.greetingName}</p>
      <p class="center-msg">Your booking request with <span style="color: #565656">${user.user}</span> for <span style="color: #565656">${user.selectedDate}</span> has been <span style="color: #EE6026;">Declined</span> by the user.</p>
      <p class="center-msg">We invite you to search for another user in your desired destination or communicate with your user to consider booking a more convenient time.</p>
      <p style="text-align: right;
      letter-spacing: 0px;
      color: #565656;
      font-size: 20px;
      opacity: 1;">Sincerely,</p>
      <p style="text-align: right;
      letter-spacing: 0px;
      color: #565656;
      font-size: 20px;
      opacity: 1;">The JAGZ TEAM</p>
    </div>
    </center>
  </div>
  </body>
  </html>`,
  cancelBooking: user => `<html lang="en">
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
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <center>
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png">
    <div class="content-text">
      <p class="heading">Booking Canceled<p>
      <img src="https://mtbguru.s3.amazonaws.com/gallery/NedIPaUagLcCl.png">
      <p class="name">Hi ${user.greetingName}</p>
      <p class="center-msg">Your booking request with <span style="color: #565656">${user.traveller}</span> for <span style="color: #565656">${user.selectedDate}</span> has been <span style="color: #EE6026;">Canceled</span> by the traveler.</p>
      <p style="text-align: right;
      letter-spacing: 0px;
      color: #565656;
      font-size: 20px;
      opacity: 1;">Sincerely,</p>
      <p style="text-align: right;
      letter-spacing: 0px;
      color: #565656;
      font-size: 20px;
      opacity: 1;">The JAGZ TEAM</p>
    </div>
    </center>
  </div>
  </body>
  </html>`,
  paymentNotifyTraveller: user => `<html lang="en">
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
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <center>
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png">
    <div class="content-text">
      <p class="heading">Payment Success!<p>
      <img src="https://mtbguru.s3.amazonaws.com/gallery/bJj0AkNTQd6vA.png">
      <p class="name">Hi ${user.greetingName}</p>
      <p class="center-msg">Your upcoming booking with <span style="color: #565656">${user.user}</span> on <span style="color: #565656">${user.selectedDate}</span> is now <span style="color: #EE6026">Paid</span> by $${user.price}.
      Please communicate with your user via the chat to establish plans.</p>
      <p class="center-msg" style="color: #565656">Enjoy your travels and ride on!</p>
      <p style="text-align: right;
      letter-spacing: 0px;
      color: #565656;
      font-size: 20px;
      opacity: 1;">Thanks,</p>
      <p style="text-align: right;
      letter-spacing: 0px;
      font-size: 20px;
      color: #565656;
      opacity: 1;">The JAGZ TEAM</p>
    </div>
    </center>
  </div>
  </body>
  </html>   `,
  paymentNotifyTourGuideTraveller: user => `<html lang="en">
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
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <center>
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png">
    <div class="content-text">
      <p class="heading">Payment Success!<p>
      <img src="https://mtbguru.s3.amazonaws.com/gallery/bJj0AkNTQd6vA.png">
      <p class="name">Hi ${user.greetingName}</p>
      <p class="center-msg">Your upcoming booking with <span style="color: #565656">${user.user}</span> on <span style="color: #565656">${user.selectedDate}</span> is now <span style="color: #EE6026">accepted</span> and <span style="color: #EE6026">Paid</span> by $${user.price}.
      Please communicate with your user via the chat to establish plans.</p>
      <p class="center-msg" style="color: #565656">Enjoy your travels and ride on!</p>
      <p style="text-align: right;
      letter-spacing: 0px;
      color: #565656;
      font-size: 20px;
      opacity: 1;">Thanks,</p>
      <p style="text-align: right;
      letter-spacing: 0px;
      font-size: 20px;
      color: #565656;
      opacity: 1;">The JAGZ TEAM</p>
    </div>
    </center>
  </div>
  </body>
  </html>   `,
  paymentNotifyGuru: user => `<html lang="en">
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
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <center>
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png">
    <div class="content-text">
      <p class="heading">Payment Success!<p>
      <img src="https://mtbguru.s3.amazonaws.com/gallery/bJj0AkNTQd6vA.png">
      <p class="name">Hi ${user.greetingUser}</p>
      <p class="center-msg">Your traveler <span style="color: #565656">${user.traveller}</span> has paid $${user.price} for his meeting with you on <span style="color: #565656">${user.selectedDate}</span>. 
      Please communicate via the chat to establish plans.</p>
      <p style="text-align: right;
      letter-spacing: 0px;
      color: #565656;
      font-size: 20px;
      opacity: 1;">Cheers,</p>
      <p style="text-align: right;
      letter-spacing: 0px;
      color: #565656;
      font-size: 20px;
      opacity: 1;">The JAGZ TEAM</p>
    </div>
    </center>
  </div>
  </body>
  </html>`,
  paymentNotifyMasterMerchant: user => `<html lang="en">
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
        font-size: 20px;
        letter-spacing: 0.34px;
        color: #929292;
        opacity: 1;
      }
    </style>
  </head>
  <body>
  <div>
    <center>
    <img src="https://mtbguru.s3.amazonaws.com/gallery/vonB6jEoOOObA.png">
    <div class="content-text">
      <p class="heading">Payment Success!<p>
      <img src="https://mtbguru.s3.amazonaws.com/gallery/bJj0AkNTQd6vA.png">
      <p class="name">Hi David</p>
      <p class="center-msg">Traveler <span style="color: #565656">${user.traveller}</span> has paid $${user.price} for his meeting with host ${user.user} on <span style="color: #565656">${user.selectedDate}</span>.
      The service fee is $${user.serviceFeeAmount}. Host has paypal as payout method and you need to pay him respective amount.</p>
      <p style="text-align: right;
      letter-spacing: 0px;
      color: #565656;
      font-size: 20px;
      opacity: 1;">Cheers,</p>
      <p style="text-align: right;
      letter-spacing: 0px;
      color: #565656;
      font-size: 20px;
      opacity: 1;">The JAGZ TEAM</p>
    </div>
    </center>
  </div>
  </body>
  </html>`,
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
        <tr>
          <td style="text-align: left;">
          <p class="paratext">PS: Please note that you will not be ‘Searchable’ as a Host until you have completely 
          filled out your host profile and have added a ‘Payout’ method.</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </body>
  </html>  
  `,
};
