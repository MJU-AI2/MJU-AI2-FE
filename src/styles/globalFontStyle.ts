import { createGlobalStyle } from 'styled-components'

const GlobalFontStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard';
        font-size: 1rem;
        src: url('/fonts/Pretendard-Regular.woff2') format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-size: 1.5rem;
        src: url('/fonts/Pretendard-Medium.woff2') format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-size: 1.75rem;
        src: url('/fonts/Pretendard-SemiBold.woff2') format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-size: 2rem;
        src: url('/fonts/Pretendard-Bold.woff2') format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-size: 2.5rem;
        src: url('/fonts/Pretendard-ExtraBold.woff2') format('woff2');
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    }

    html, body, #root {
        font-weight: 600;
        letter-spacing: -0.02px;
    }
`

export default GlobalFontStyle
