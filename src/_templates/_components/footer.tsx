export function Footer(props: { url: string }) {
  return (
    <footer className="footer">
      <div>
        <FullLogo />
        <p className="copyright">© Copyright 2000-2023 Divvun</p>
      </div>
      <div style={{ flexGrow: 1 }}>
        <div className="links">
          <div className="link-group">
            <span>About us</span>
            <ul>
              <li>
                <a href="/">History</a>
              </li>
              <li>
                <a href="/">Members</a>
              </li>
            </ul>
          </div>
          <div className="link-group">
            <span>Proofing tools</span>
            <ul>
              <li>
                <a href="/">Descriptive Link 1</a>
              </li>
              <li>
                <a href="/">Descriptive Link 2</a>
              </li>
              <li>
                <a href="/">Descriptive Link 3</a>
              </li>
            </ul>
          </div>
          <div className="link-group">
            <span>Keyboards</span>
            <ul>
              <li>
                <a href="/">Descriptive Link 1</a>
              </li>
              <li>
                <a href="/">Descriptive Link 2</a>
              </li>
            </ul>
          </div>
          <div className="link-group">
            <span>Dictionaries</span>
            <ul>
              <li>
                <a href="/">Descriptive Link 1</a>
              </li>
              <li>
                <a href="/">Descriptive Link 2</a>
              </li>
            </ul>
          </div>
          <div className="link-group">
            <span>Contact us</span>
            <ul>
              <li>
                <a href="/">Descriptive Link 1</a>
              </li>
              <li>
                <a href="/">Descriptive Link 2</a>
              </li>
              <li>
                <a href="/">Descriptive Link 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-info">
        <div className="info-text">
          <span>UiT The Arctic University of Norway</span>
          <p>PO Box 6050 Langnes</p>
          <p>N-9037 Tromsø</p>
          <p>Norway</p>
        </div>
        <Star />
      </div>
    </footer>
  )
}

function FullLogo() {
  return (
    <svg width="132" height="131" viewBox="0 0 132 131" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5901 33.799L4.75435 49.5159L2.27357 49.1751L12.5901 33.799Z" fill="#01FDC1" />
      <path d="M20.2817 24.8845L7.0195 50.1773L4.46502 49.4036L20.2817 24.8845Z" fill="#01FDC1" />
      <path d="M26.5601 19.1376L9.35249 51.3549L6.88853 50.1099L26.5601 19.1376Z" fill="#01FDC1" />
      <path d="M31.4437 15.3265L11.8115 51.3944L9.62134 50.2878L31.4437 15.3265Z" fill="#01FDC1" />
      <path d="M29.0414 23.9994L14.2671 51.7436L12.0769 50.6369L29.0414 23.9994Z" fill="#01FDC1" />
      <path d="M29.0995 28.4542L16.6106 52.2826L14.4204 51.1759L29.0995 28.4542Z" fill="#01FDC1" />
      <path d="M29.7422 32.3371L19.5826 52.6028L17.047 51.2315L29.7422 32.3371Z" fill="#01FDC1" />
      <path d="M34.8531 28.4216L21.843 53.2906L19.9597 51.7062L34.8531 28.4216Z" fill="#01FDC1" />
      <path d="M34.9475 32.6912L24.286 53.4047L22.4407 52.0108L34.9475 32.6912Z" fill="#01FDC1" />
      <path d="M31.5027 43.3138L26.819 53.9255L24.5853 52.6079L31.5027 43.3138Z" fill="#01FDC1" />
      <path d="M32.5512 46.2289L29.3154 54.2028L27.1252 53.0961L32.5512 46.2289Z" fill="#01FDC1" />
      <path d="M39.6369 38.9453L31.7973 55.1112L29.1965 53.7971L39.6369 38.9453Z" fill="#01FDC1" />
      <path d="M44.3557 35.7369L34.4301 55.7648L31.5555 54.3123L44.3557 35.7369Z" fill="#01FDC1" />
      <path d="M48.8104 32.7933L36.5549 56.6289L33.9976 55.3368L48.8104 32.7933Z" fill="#01FDC1" />
      <path d="M48.6781 37.731L38.5356 58.4502L35.5241 56.9285L48.6781 37.731Z" fill="#01FDC1" />
      <path d="M48.5624 42.4837L40.4435 59.432L38.0261 58.1071L48.5624 42.4837Z" fill="#01FDC1" />
      <path d="M49.0625 46.3687L40.2339 64.3461L37.5039 62.9667L49.0625 46.3687Z" fill="#01FDC1" />
      <path d="M49.1825 50.825L40.8391 68.1706L37.797 66.5211L49.1825 50.825Z" fill="#01FDC1" />
      <path d="M53.4126 48.7514L42.0078 70.7224L39.6807 69.5466L53.4126 48.7514Z" fill="#01FDC1" />
      <path d="M54.0157 52.5781L45.1684 70.1668L42.8414 68.991L54.0157 52.5781Z" fill="#01FDC1" />
      <path d="M54.726 56.2211L47.5883 70.8806L45.3981 69.7739L54.726 56.2211Z" fill="#01FDC1" />
      <path d="M54.8715 60.5267L49.7226 71.7786L47.5324 70.6719L54.8715 60.5267Z" fill="#01FDC1" />
      <path d="M55.605 64.1301L51.8291 73.0295L49.502 71.8537L55.605 64.1301Z" fill="#01FDC1" />
      <path d="M57.3326 66.0287L53.5368 74.9621L51.2098 73.7863L57.3326 66.0287Z" fill="#01FDC1" />
      <path d="M60.0078 65.9994L55.2331 76.473L53.1666 75.4288L60.0078 65.9994Z" fill="#01FDC1" />
      <path d="M62.6378 66.3532L57.3215 77.7701L55.2412 76.7189L62.6378 66.3532Z" fill="#01FDC1" />
      <path d="M65.7319 65.9112L59.4941 78.9078L57.4131 77.8563L65.7319 65.9112Z" fill="#01FDC1" />
      <path d="M68.3041 66.2147L61.3795 80.2968L59.3807 79.2869L68.3041 66.2147Z" fill="#01FDC1" />
      <path d="M69.9859 67.9773L63.6459 81.3746L61.3616 80.2203L69.9859 67.9773Z" fill="#01FDC1" />
      <path d="M71.0226 70.5674L65.0542 83.3279L62.7698 82.1736L71.0226 70.5674Z" fill="#01FDC1" />
      <path d="M74.1637 69.5857L68.238 82.2731L65.9536 81.1188L74.1637 69.5857Z" fill="#01FDC1" />
      <path d="M77.7442 68.1345L70.424 83.2113L68.1396 82.0571L77.7442 68.1345Z" fill="#01FDC1" />
      <path d="M81.2447 66.6394L72.3746 84.3719L70.0902 83.2176L81.2447 66.6394Z" fill="#01FDC1" />
      <path d="M81.9757 69.907L74.7583 84.8076L72.4739 83.6533L81.9757 69.907Z" fill="#01FDC1" />
      <path d="M81.524 75.0261L77.2896 84.8157L75.0052 83.6614L81.524 75.0261Z" fill="#01FDC1" />
      <path d="M80.9775 79.7582L79.5125 84.7752L77.2528 83.6334L80.9775 79.7582Z" fill="#01FDC1" />
      <mask
        id="mask0_374_13816"
        // style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="-1"
        y="-11"
        width="91"
        height="77"
      >
        <path
          d="M-0.133301 -9.68542C-0.133301 -9.68542 17.7612 -3.95712 31.8779 9.58199C43.0287 20.657 44.8023 23.2872 50.9178 25.4359C57.0332 27.5846 70.6974 29.0586 71.0207 34.8501C71.344 40.6415 66.9874 39.2129 70.2394 43.7029C73.4915 48.1928 68.8077 47.284 70.4357 50.407C72.0637 53.5299 75.7044 58.0237 77.6557 59.4561C79.5217 60.826 78.8887 62.0163 85.2046 63.5994C85.3194 63.6282 89.1491 65.5637 89.1491 65.5637V-10.0647"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_374_13816)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M35.313 12.5515L39.2543 18.3163C39.4019 18.4842 39.5452 18.6476 39.6846 18.8065C42.2112 21.6875 43.467 23.1194 46.063 24.0702C46.6544 24.3808 47.2834 24.5845 48.1734 24.8727C48.6484 25.0265 49.1979 25.2045 49.8558 25.4356C50.394 25.6247 51.1296 25.9748 51.9356 26.3585C53.1212 26.9228 54.4591 27.5596 55.545 27.863C57.0222 28.2757 58.6056 28.6269 60.1753 28.9752C65.5805 30.1743 70.8247 31.3377 71.0207 34.8498C71.1675 37.4792 70.3495 38.6204 69.717 39.5028C68.9564 40.564 68.4639 41.2512 70.2394 43.7026C72.0687 46.2282 71.3871 47.0456 70.7302 47.8332C70.2193 48.4458 69.7235 49.0404 70.4357 50.4067C71.7587 52.9445 74.4108 56.3876 76.4054 58.3574C77.3472 59.2877 77.8567 59.5478 78.5875 59.9208C78.9596 60.1108 79.3891 60.3301 79.9623 60.682C81.1305 61.3994 81.8448 61.2566 82.2815 60.8139C82.4938 60.5987 82.602 60.3613 82.6744 60.0755C82.8645 59.3245 82.9688 58.6777 82.9688 58.6777C82.8847 58.603 82.7576 58.5123 82.5851 58.3892C82.2707 58.1649 81.8055 57.8331 81.1755 57.2942C80.5676 56.7743 79.9747 56.133 79.3257 55.4311C78.2573 54.2756 77.0369 52.9557 75.3471 51.7416C74.1686 50.281 74.1259 49.0047 74.0819 47.6888C74.0324 46.2098 73.9812 44.6808 72.3142 42.7837C72.2735 42.7373 72.2322 42.6909 72.1909 42.6444C71.5749 41.9517 70.9355 41.2326 71.6812 40.2694C77.2459 30.6433 68.0677 26.3894 57.2289 25.4356C52.328 25.0043 48.5358 23.3264 43.6404 20.3315C40.2447 17.6151 38.0558 15.0042 35.313 12.5515Z"
          fill="#0CB6FF"
        />
        <path d="M55.9709 21.3485L54.4224 26.2748L52.3733 25.2395L55.9709 21.3485Z" fill="#0CB6FF" />
        <path d="M57.6685 14.9079L52.8131 25.3667L50.8844 24.3922L57.6685 14.9079Z" fill="#0CB6FF" />
        <path d="M59.8901 7.47492L50.9889 25.2288L48.7331 24.089L59.8901 7.47492Z" fill="#0CB6FF" />
        <path d="M61.9183 0.332867L49.5627 23.9318L47.3735 22.8256L61.9183 0.332867Z" fill="#0CB6FF" />
        <path d="M54.4076 9.60258L47.6914 22.7925L46.175 22.0263L54.4076 9.60258Z" fill="#0CB6FF" />
        <path d="M50.0093 14.2426L46.269 22.1474L44.9204 21.4659L50.0093 14.2426Z" fill="#0CB6FF" />
        <path d="M47.0178 16.5101L45.162 21.4412L43.5834 20.6435L47.0178 16.5101Z" fill="#0CB6FF" />
        <path d="M44.9718 17.2994L43.8581 20.6304L42.5756 19.9823L44.9718 17.2994Z" fill="#0CB6FF" />
        <path d="M43.4951 17.629L42.8086 19.7718L41.9374 19.3316L43.4951 17.629Z" fill="#0CB6FF" />
        <path d="M44.1543 14.8496L42.1847 19.2719L41.2404 18.7948L44.1543 14.8496Z" fill="#0CB6FF" />
        <path d="M45.1956 11.1438L41.5661 18.5355L40.5089 18.0013L45.1956 11.1438Z" fill="#0CB6FF" />
        <path d="M45.6869 8.25151L40.7683 17.8447L39.7177 17.3138L45.6869 8.25151Z" fill="#0CB6FF" />
        <path d="M45.527 6.47032L40.1424 17.3553L38.647 16.5997L45.527 6.47032Z" fill="#0CB6FF" />
        <path d="M43.4337 7.59273L39.0735 16.5728L37.713 15.8853L43.4337 7.59273Z" fill="#0CB6FF" />
        <path d="M41.2948 8.75553L38.1288 15.8124L36.6574 15.0689L41.2948 8.75553Z" fill="#0CB6FF" />
        <path d="M38.9037 10.1283L37.3715 14.5771L35.9681 13.5259L38.9037 10.1283Z" fill="#0CB6FF" />
        <path d="M37.0539 11.2057L36.2891 13.7638L35.3133 12.5507L37.0539 11.2057Z" fill="#0CB6FF" />
        <path d="M58.5059 20.7804L55.912 28.1467L53.2782 26.8158L58.5059 20.7804Z" fill="#0CB6FF" />
        <path d="M62.393 18.5638L57.9983 29.7111L54.7376 28.0635L62.393 18.5638Z" fill="#0CB6FF" />
        <path d="M66.0288 17.3383L60.5635 30.5647L57.0821 28.8056L66.0288 17.3383Z" fill="#0CB6FF" />
        <path d="M69.2853 17.0073L62.8658 32.1692L59.1135 30.2733L69.2853 17.0073Z" fill="#0CB6FF" />
        <path d="M70.8641 18.6778L64.371 34.4798L60.1554 32.3497L70.8641 18.6778Z" fill="#0CB6FF" />
        <path d="M74.1402 17.6069L66.971 33.9804L63.2844 32.1177L74.1402 17.6069Z" fill="#0CB6FF" />
        <path d="M77.1932 17.104L68.2174 36.4284L64.6611 34.6315L77.1932 17.104Z" fill="#0CB6FF" />
        <path d="M80.4706 16.0724L68.8308 39.6713L65.536 38.0066L80.4706 16.0724Z" fill="#0CB6FF" />
        <path d="M85.2889 12.3999L70.1794 42.2339L66.6232 40.437L85.2889 12.3999Z" fill="#0CB6FF" />
        <path d="M85.5595 16.4619L62.8895 59.5984L59.0194 57.643L85.5595 16.4619Z" fill="#0CB6FF" />
        <path d="M85.512 20.9107L70.4652 50.1334L67.3631 48.566L85.512 20.9107Z" fill="#0CB6FF" />
        <path d="M84.1147 28.2093L67.9247 59.7898L64.463 58.0406L84.1147 28.2093Z" fill="#0CB6FF" />
        <path d="M82.4195 35.8814L67.93 65.6429L63.4816 63.3952L82.4195 35.8814Z" fill="#0CB6FF" />
        <path d="M81.139 42.9615L74.8346 57.5094L71.458 55.8033L81.139 42.9615Z" fill="#0CB6FF" />
        <path d="M81.2206 47.1385L76.242 60.1635L72.1905 58.1163L81.2206 47.1385Z" fill="#0CB6FF" />
        <path d="M84.3949 46.1289L79.2452 57.8469L76.6361 56.5286L84.3949 46.1289Z" fill="#0CB6FF" />
        <path d="M83.6177 52.0263L81.5006 58.3915L79.0327 57.1446L83.6177 52.0263Z" fill="#0CB6FF" />
        <path d="M83.4726 56.2962L82.5592 60.3643L80.1735 59.362L83.4726 56.2962Z" fill="#0CB6FF" />
      </g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.42773 49.1729C2.42773 49.1729 4.49345 49.8369 5.57287 50.199C7.3698 50.8018 9.12948 51.3921 10.2364 51.6296L10.2364 51.6297C21.5004 54.0468 29.5525 55.7746 34.1725 59.1922C36.8504 61.1731 33.7049 61.93 30.6194 62.6725C27.3247 63.4653 24.0984 64.2417 28.104 66.4743C30.0374 67.552 32.7257 68.4574 35.5436 69.4066C39.4697 70.729 43.6473 72.1361 46.3853 74.2116C47.4957 75.0534 47.6933 75.5603 47.8752 76.027C47.9992 76.345 48.1158 76.6444 48.5092 77.0183C50.0887 78.5195 53.6696 79.7956 57.4799 81.1534L57.48 81.1534C58.8879 81.6551 60.3271 82.168 61.7082 82.7075C64.7688 83.903 67.8897 84.3147 70.9758 84.7218L70.976 84.7218C71.2791 84.7618 71.5709 84.7992 71.8549 84.8356C73.2658 85.0165 74.4852 85.1728 75.9553 85.4995C77.7751 85.9742 79.252 86.3171 79.7794 83.9435C78.8221 83.5316 78.6954 83.5401 78.3714 83.562C78.1596 83.5762 77.8636 83.5962 77.1962 83.5082L77.196 83.5081C74.1099 83.101 70.989 82.6894 67.9284 81.4938C66.5472 80.9543 65.1081 80.4414 63.7002 79.9398L63.7 79.9397C59.8897 78.5819 56.3088 77.3058 54.7294 75.8046C54.336 75.4307 54.2193 75.1313 54.0954 74.8133C53.9135 74.3467 53.7159 73.8397 52.6055 72.9979C49.8675 70.9224 45.6899 69.5153 41.7638 68.1929C40.1448 67.6476 40.2591 67.4871 40.4192 67.2622C40.5378 67.0957 40.6815 66.8939 40.1651 66.4743C39.4992 65.9333 39.8068 65.5189 40.17 65.0295C40.4689 64.6269 40.8054 64.1736 40.6684 63.5573C40.5611 63.0742 40.7576 62.3727 40.9757 61.5938C41.3742 60.1713 41.8449 58.4908 40.6684 57.4124C35.7502 52.904 26.8601 51.9699 16.7436 50.907C12.1561 50.425 2.48048 49.0361 2.48048 49.0361L2.42773 49.1729Z"
        fill="#01FDC1"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.62451 109.445V130.307H12.0267C16.5492 130.307 19.3461 128.102 19.3461 124.436C19.3461 121.962 17.8286 119.936 15.2103 119.429C17.4716 118.624 18.5427 117.045 18.5427 114.75C18.5427 111.561 16.1624 109.445 12.1159 109.445H2.62451ZM11.2531 117.879H6.67101V112.873H11.2828C13.3358 112.873 14.4367 113.826 14.4367 115.257C14.4367 116.866 13.2168 117.879 11.2531 117.879ZM11.7291 126.88H6.67101V121.277H11.6696C13.9607 121.277 15.2401 122.38 15.2401 124.078C15.2401 125.926 13.8416 126.88 11.7291 126.88ZM20.6765 122.395C20.6765 126.895 23.9494 130.501 28.6207 130.501C33.292 130.501 36.5649 126.895 36.5649 122.395C36.5649 117.895 33.292 114.288 28.6207 114.288C23.9494 114.288 20.6765 117.895 20.6765 122.395ZM32.5482 122.395C32.5482 124.749 31.12 127.133 28.6207 127.133C26.1214 127.133 24.6932 124.749 24.6932 122.395C24.6932 120.04 26.1214 117.686 28.6207 117.686C31.12 117.686 32.5482 120.04 32.5482 122.395ZM38.097 114.646H41.9947V118.133C42.441 115.957 44.1674 114.467 46.6072 114.467C47.0535 114.467 47.4998 114.497 47.7974 114.587V118.461C47.4998 118.431 47.2023 118.431 46.8155 118.431C44.0782 118.431 42.1733 120.13 42.1733 123.259V130.355H38.097V114.646ZM55.7685 114.288C51.246 114.288 48.0921 117.865 48.0921 122.395C48.0921 126.954 50.9782 130.501 55.9471 130.501C59.5473 130.501 62.3144 128.385 63.0284 125.315H59.339C58.8332 126.478 57.8215 127.372 55.9173 127.372C53.537 127.372 52.1386 125.613 51.9898 123.289H63.2367V122.305C63.2367 117.805 60.6779 114.288 55.7685 114.288ZM59.339 120.458H52.1088C52.4659 118.58 53.775 117.179 55.7685 117.179C57.7918 117.179 59.0712 118.52 59.339 120.458ZM64.3842 125.643C64.3842 122.603 66.4967 121.024 70.5135 120.726L74.2624 120.428V119.862C74.2624 118.312 73.3996 117.328 71.6143 117.328C69.9779 117.328 68.9663 118.252 68.7878 119.444H64.9198C65.3958 116.375 67.9547 114.288 71.6143 114.288C75.9881 114.288 78.3089 116.613 78.3089 120.13V130.355H74.3814V128.027C73.7864 129.368 72.0904 130.501 69.7696 130.501C66.4967 130.501 64.3842 128.594 64.3842 125.643ZM68.3117 125.524C68.3117 126.835 69.2341 127.729 70.8705 127.729C72.9533 127.729 74.2624 126.418 74.2624 124.183V123.14L71.3168 123.378C69.4721 123.527 68.3117 124.064 68.3117 125.524ZM92.5324 124.12V114.646H96.562V123.785C96.562 125.799 97.2336 126.807 99.4163 126.807C101.263 126.807 102.271 125.901 102.271 123.785V114.646H106.3V130.361H102.271V128.15C101.586 129.759 100.364 130.333 98.0731 130.333C94.4134 130.333 92.5324 127.935 92.5324 124.12ZM112.132 114.646H108.205V130.361H112.281V121.173C112.281 119.057 113.293 117.865 115.108 117.865C116.952 117.865 117.815 119.116 117.815 121.083V130.361H121.891V121.173C121.891 119.057 122.903 117.865 124.718 117.865C126.533 117.865 127.426 119.116 127.426 121.083V130.361H131.502V120.458C131.502 116.732 129.687 114.288 126.057 114.288C123.558 114.288 122.07 115.391 121.177 117C120.404 115.332 118.916 114.288 116.536 114.288C114.185 114.288 112.817 115.421 112.132 117.09V114.646Z"
        fill="#FDFDFD"
      />
      <path d="M84.5433 109.467H80.3438V130.355H84.5433V109.467Z" fill="#FDFDFD" />
      <path d="M86.561 114.647H88.579H90.597V130.355H86.561V114.647Z" fill="#FDFDFD" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M90.6039 96.9821L88.5141 73.1404L86.5743 96.9821C86.4559 98.4308 85.0035 99.2083 83.5521 99.3327L60.7178 101.348L83.5521 103.362C84.6516 103.454 85.7153 104.33 86.2384 105.385V105.377L86.2505 105.41C86.3529 105.62 86.4337 105.838 86.489 106.057L88.589 111.757H87.2644L87.2649 111.757H88.589H89.9321L89.9325 111.757H88.589V111.757L90.7717 105.713L90.7725 105.743C91.145 104.549 92.0964 103.462 93.2903 103.362L115.789 101.348L93.2903 99.3327C91.8297 99.2077 90.7113 98.441 90.6039 96.9821Z"
        fill="#FDFDFD"
      />
    </svg>
  )
}

function Star() {
  return (
    <svg width="119" height="170" viewBox="0 0 119 170" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M73.4693 77.7439L-3.75065e-06 84.1951L73.4693 90.1829C77.9335 90.5486 80.3293 95.0319 80.7128 99.5122L86.9215 170L93.1302 99.5122C93.4131 96.1184 96.1124 92.8347 99.3638 91.22L99.3384 91.22L99.44 91.1825C100.089 90.8664 100.759 90.6169 101.435 90.4462L118.999 83.9639L118.999 88.0528L119 88.0512L119 83.9637L119 79.8178L118.999 79.8166L118.999 83.9639L118.999 83.9639L100.373 77.2261L100.467 77.2235C96.7871 76.0737 93.438 73.1366 93.1302 69.4512L86.9215 -3.79946e-06L80.7128 69.4512C80.3274 73.9602 77.9648 77.4125 73.4693 77.7439Z"
        fill="#FDFDFD"
      />
    </svg>
  )
}
