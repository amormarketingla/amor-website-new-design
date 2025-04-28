import nodemailer from 'nodemailer';

const EMAIL_SERVICE = import.meta.env.EMAIL_SERVICE;
const EMAIL_PASSWORD = import.meta.env.EMAIL_PASSWORD;
export const EMAIL_ACCOUNT = import.meta.env.EMAIL_ACCOUNT;

export const transporter = nodemailer.createTransport({
  service: EMAIL_SERVICE,
  auth: {
    user: EMAIL_ACCOUNT,
    pass: EMAIL_PASSWORD,
  },
});

export const emailTemplate = (name: string, email: string, phone: string, message: string, subject: string) => {
  return `
      <div class="email-header">
        <h1>EMAIL FROM C&C WEBSITE - CONTACT FORM</h1>
      </div>
      <div class="email-content">
        <h3>FROM:</h3>
        <p>${name} - ${email}</p><br />
        <h3>SUBJECT:</h3>
        <p>${subject}</p><br />
        <h3>MESSAGE:</h3>
        <p>${message}</p>
      </div>
      <div class="email-footer">
        <span>Phone:</span>
        <span>${phone}</span>
      </div>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 20px;
        }
        .email-header {
          background-color: #BF6336;
          color: white;
          padding: 10px;
          text-align: center;
        }
        .email-content {
          margin: 20px 0;
        }
        .email-content h3 {
          display: inline-block;
          color: #333;
          margin-right: 10px;
        }
        .email-content p {
          display: inline-block;
          font-size: 1rem;
          color: #555;
        }
        .email-footer {
          border-top: 1px solid #ddd;
          margin-top: 20px;
          padding-top: 10px;
          color: #888;
        }
      </style>
    `;
};

export const emailTemplateReceptor = () => {
  return `
    <!DOCTYPE html>

    <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">

    <head>
      <title></title>
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" /><!--[if mso]>
    <xml><w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word"><w:DontUseAdvancedTypographyReadingMail/></w:WordDocument>
    <o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml>
    <![endif]--><!--[if !mso]><!--><!--<![endif]-->
      <style>
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
        }

        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: inherit !important;
        }

        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
        }

        p {
          line-height: inherit
        }

        .desktop_hide,
        .desktop_hide table {
          mso-hide: all;
          display: none;
          max-height: 0px;
          overflow: hidden;
        }

        .image_block img+div {
          display: none;
        }

        sup,
        sub {
          font-size: 75%;
          line-height: 0;
        }

        @media (max-width:670px) {
          .desktop_hide table.icons-inner {
            display: inline-block !important;
          }

          .icons-inner {
            text-align: center;
          }

          .icons-inner td {
            margin: 0 auto;
          }

          .image_block div.fullWidth {
            max-width: 100% !important;
          }

          .mobile_hide {
            display: none;
          }

          .row-content {
            width: 100% !important;
          }

          .stack .column {
            width: 100%;
            display: block;
          }

          .mobile_hide {
            min-height: 0;
            max-height: 0;
            max-width: 0;
            overflow: hidden;
            font-size: 0px;
          }

          .desktop_hide,
          .desktop_hide table {
            display: table !important;
            max-height: none !important;
          }

          .row-2 .column-1 .block-1.spacer_block {
            height: 50px !important;
          }

          .row-1 .column-1 .block-1.image_block .alignment div {
            margin: 0 auto !important;
          }

          .row-2 .column-1 .block-2.divider_block td.pad {
            padding: 0 25px !important;
          }

          .row-2 .column-1 .block-2.divider_block .alignment table {
            display: inline-table;
          }

          .row-2 .column-1 .block-4.spacer_block {
            height: 30px !important;
          }

          .row-2 .column-1 .block-3.paragraph_block td.pad {
            padding: 10px 25px 0 !important;
          }

          .row-2 .column-1 .block-6.spacer_block {
            height: 10px !important;
          }

          .row-2 .column-1 .block-7.paragraph_block td.pad>div,
          .row-2 .column-1 .block-8.paragraph_block td.pad>div {
            font-size: 36px !important;
          }

          .row-2 .column-1 .block-10.paragraph_block td.pad>div {
            font-size: 14px !important;
          }

          .row-2 .column-1 .block-12.button_block span {
            line-height: 28px !important;
          }

          .row-2 .column-1 .block-12.button_block .alignment .button {
            width: 50% !important;
          }

          .row-2 .column-1 .block-13.spacer_block {
            height: 20px !important;
          }
        }
      </style>
      <!--[if mso ]><style>sup, sub { font-size: 100% !important; } sup { mso-text-raise:10% } sub { mso-text-raise:-10% }</style> <![endif]--><!--[if true]><style>.forceBgColor{background-color: white !important}</style><![endif]-->
    </head>

    <body class="body forceBgColor"
      style="background-color: transparent; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
      <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: transparent; background-size: auto; background-image: none; background-position: top left; background-repeat: no-repeat;"
        width="100%">
        <tbody>
          <tr>
            <td>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto;"
                width="100%">
                <tbody>
                  <tr>
                    <td>
                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                        class="row-content stack" role="presentation"
                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto; background-color: #ffffff; color: #000000; width: 650px; margin: 0 auto;"
                        width="650">
                        <tbody>
                          <tr>
                            <td class="column column-1"
                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;"
                              width="100%">
                              <table border="0" cellpadding="0" cellspacing="0"
                                class="image_block block-1" role="presentation"
                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                width="100%">
                                <tr>
                                  <td class="pad" style="width:100%;">
                                    <div align="left" class="alignment">
                                      <div style="max-width: 650px;"><a href="#"
                                          style="outline:none" tabindex="-1"
                                          target="_blank"><img alt="Logo"
                                            height="auto"
                                            src="images/BEE_May20_MarketingAgency_DashboardMetrics_v01.png"
                                            style="display: block; height: auto; border: 0; width: 100%;"
                                            title="Logo" width="650" /></a></div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2"
                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto;"
                width="100%">
                <tbody>
                  <tr>
                    <td>
                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                        class="row-content stack" role="presentation"
                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #007c86; background-image: url('images/BEE_May20_MarketingAgency_Onboarding_v01_copy.jpg'); background-repeat: no-repeat; background-size: cover; border-radius: 0; color: #000000; width: 650px; margin: 0 auto;"
                        width="650">
                        <tbody>
                          <tr>
                            <td class="column column-1"
                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;"
                              width="100%">
                              <div class="spacer_block block-1"
                                style="height:60px;line-height:60px;font-size:1px;"> </div>
                              <table border="0" cellpadding="0" cellspacing="0"
                                class="divider_block block-2 mobile_hide" role="presentation"
                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                width="100%">
                                <tr>
                                  <td class="pad"
                                    style="padding-left:60px;padding-right:60px;">
                                    <div align="center" class="alignment">
                                      <table border="0" cellpadding="0" cellspacing="0"
                                        role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                        width="100%">
                                        <tr>
                                          <td class="divider_inner"
                                            style="font-size: 1px; line-height: 1px; border-top: 1px solid #ffffff;">
                                            <span
                                              style="word-break: break-word;"> </span>
                                          </td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table border="0" cellpadding="0" cellspacing="0"
                                class="paragraph_block block-3 mobile_hide" role="presentation"
                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                width="100%">
                                <tr>
                                  <td class="pad"
                                    style="padding-left:60px;padding-right:60px;padding-top:10px;">
                                    <div
                                      style="color:#ffffff;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;letter-spacing:2px;line-height:1.2;text-align:left;mso-line-height-alt:17px;">
                                      <p style="margin: 0;">MAILCOMET                     
                                                                             EST. 2017
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <div class="spacer_block block-4 mobile_hide"
                                style="height:80px;line-height:80px;font-size:1px;"> </div>
                              <table border="0" cellpadding="0" cellspacing="0"
                                class="image_block block-5" role="presentation"
                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                width="100%">
                                <tr>
                                  <td class="pad"
                                    style="width:100%;padding-right:0px;padding-left:0px;">
                                    <div align="center" class="alignment">
                                      <div style="max-width: 65px;"><img alt=""
                                          height="auto"
                                          src="images/3_Green_Sparkles.png"
                                          style="display: block; height: auto; border: 0; width: 100%;"
                                          title="" width="65" /></div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <div class="spacer_block block-6"
                                style="height:20px;line-height:20px;font-size:1px;"> </div>
                              <table border="0" cellpadding="0" cellspacing="0"
                                class="paragraph_block block-7" role="presentation"
                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                width="100%">
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="color:#ffffff;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:60px;font-weight:700;letter-spacing:-1px;line-height:1.2;text-align:center;mso-line-height-alt:72px;">
                                      <p style="margin: 0; word-break: break-word;">
                                        Welcome to our</p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table border="0" cellpadding="0" cellspacing="0"
                                class="paragraph_block block-8" role="presentation"
                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                width="100%">
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="color:#ffffff;font-family:TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif;font-size:60px;font-weight:400;letter-spacing:-1px;line-height:1.2;text-align:center;mso-line-height-alt:72px;">
                                      <p style="margin: 0; word-break: break-word;">
                                        <em>Marketing Agency</em></p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <div class="spacer_block block-9"
                                style="height:10px;line-height:10px;font-size:1px;"> </div>
                              <table border="0" cellpadding="0" cellspacing="0"
                                class="paragraph_block block-10" role="presentation"
                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                width="100%">
                                <tr>
                                  <td class="pad"
                                    style="padding-left:60px;padding-right:60px;padding-top:10px;">
                                    <div
                                      style="color:#ffffff;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:1.2;text-align:center;mso-line-height-alt:19px;">
                                      <p style="margin: 0;">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, <br />sed do
                                        eiusmod tempor incididunt.</p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <div class="spacer_block block-11"
                                style="height:20px;line-height:20px;font-size:1px;"> </div>
                              <table border="0" cellpadding="10" cellspacing="0"
                                class="button_block block-12" role="presentation"
                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                width="100%">
                                <tr>
                                  <td class="pad">
                                    <div align="center" class="alignment"><a
                                        href="http://www.example.com"
                                        style="color:#222222;text-decoration:none;"
                                        target="_blank"><!--[if mso]>
    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  href="http://www.example.com"  style="height:38px;width:187px;v-text-anchor:middle;" arcsize="25%" fillcolor="#ddd988">
    <v:stroke dashstyle="Solid" weight="1px" color="#222222"/>
    <w:anchorlock/>
    <v:textbox inset="0px,0px,0px,0px">
    <center dir="false" style="color:#222222;font-family:Arial, sans-serif;font-size:14px">
    <![endif]--><span class="button" style="background-color: #ddd988; border-bottom: 1px solid #222222; border-left: 1px solid #222222; border-radius: 10px; border-right: 1px solid #222222; border-top: 1px solid #222222; color: #222222; display: inline-block; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; mso-border-alt: none; padding-bottom: 5px; padding-top: 5px; padding-left: 15px; padding-right: 15px; text-align: center; width: 30%; word-break: keep-all; letter-spacing: 1px;"><span
                                            style="word-break: break-word; line-height: 28px;">TAKE
                                            A
                                            TOUR</span></span><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></a>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <div class="spacer_block block-13"
                                style="height:40px;line-height:40px;font-size:1px;"> </div>
                              <table border="0" cellpadding="0" cellspacing="0"
                                class="image_block block-14" role="presentation"
                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                width="100%">
                                <tr>
                                  <td class="pad"
                                    style="width:100%;padding-right:0px;padding-left:0px;">
                                    <div align="center" class="alignment">
                                      <div class="fullWidth" style="max-width: 650px;">
                                        <img alt="" height="auto"
                                          src="images/Welcome_Thread.png"
                                          style="display: block; height: auto; border: 0; width: 100%;"
                                          title="" width="650" /></div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
                <tbody>
                  <tr>
                    <td>
                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                        class="row-content stack" role="presentation"
                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 650px; margin: 0 auto;"
                        width="650">
                        <tbody>
                          <tr>
                            <td class="column column-1"
                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;"
                              width="100%">
                              <table border="0" cellpadding="0" cellspacing="0"
                                class="icons_block block-1" role="presentation"
                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: center; line-height: 0;"
                                width="100%">
                                <tr>
                                  <td class="pad"
                                    style="vertical-align: middle; color: #1e0e4b; font-family: 'Inter', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                    <!--[if vml]><table align="center" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                    <!--[if !vml]><!-->
                                    <table cellpadding="0" cellspacing="0"
                                      class="icons-inner" role="presentation"
                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; padding-left: 0px; padding-right: 0px;">
                                      <!--<![endif]-->
                                      <tr>
                                        <td
                                          style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;">
                                          <a href="http://designedwithbeefree.com/"
                                            style="text-decoration: none;"
                                            target="_blank"><img align="center"
                                              alt="Beefree Logo" class="icon"
                                              height="auto"
                                              src="images/Beefree-logo.png"
                                              style="display: block; height: auto; margin: 0 auto; border: 0;"
                                              width="34" /></a></td>
                                        <td
                                          style="font-family: 'Inter', sans-serif; font-size: 15px; font-weight: undefined; color: #1e0e4b; vertical-align: middle; letter-spacing: undefined; text-align: center; line-height: normal;">
                                          <a href="http://designedwithbeefree.com/"
                                            style="color: #1e0e4b; text-decoration: none;"
                                            target="_blank">Designed with
                                            Beefree</a></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table><!-- End -->
    </body>

    </html>
  `;
};
