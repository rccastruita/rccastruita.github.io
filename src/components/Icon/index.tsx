import React from 'react';

import style from './Icon.module.css';

type IconProps = {
    automation?: boolean;
    testing?: boolean;
    frontend?: boolean;
    backend?: boolean;
}

const Icon = ({automation, testing, frontend, backend}: IconProps) => {
    if (automation)
      return (
        <AutomationIcon />
    );
    if (testing)
      return (
          <TestingIcon />
    );
    if (frontend)
        return (
            <FrontendIcon />
    );
    if (backend)
        return (
            <BackendIcon />
    );

    return (
        <span>NO ICON</span>
    );
};

const AutomationIcon = () => {
    return (
        <svg className={style.automation}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 -3.33 70 70"
        >
          <path
            fill="#00bcf2"
            d="M46.969 0c-.168-.006-.281-.006-.313.031-.049.058-.787 2.321-1.625 5-.837 2.68-2.911 9.305-4.625 14.75-1.713 5.445-3.077 10.005-3.031 10.125.073.19.438.219 2.625.219 2.054 0 2.551.055 2.688.219.136.164-.246 1.2-2.063 5.593a719.008 719.008 0 01-2.5 5.97c-.14.326-.17.587-.094.562.24-.08 15.344-17.307 15.344-17.5 0-.15-.613-.188-3.219-.188-2.014 0-3.227-.038-3.281-.125-.047-.076.386-.994.969-2.031.582-1.037 1.978-3.556 3.125-5.594C55.908 8.258 58.212 4.181 58.28 4c.081-.212-2.123-1.398-4.031-2.156C52.295 1.066 48.144.045 46.969 0zm-8.313 3.406l-.5.063c-.579.09-3.584.905-4.156 1.125l-.406.156.062 3.031.032 3.032-.407.218c-.223.113-.83.45-1.343.75l-.938.531-2.5-1.468c-1.373-.81-2.535-1.5-2.594-1.531-.154-.082-1.827 1.423-2.875 2.593l-.906 1 1.563 2.594 1.562 2.594-.344.562c-.188.308-.552.931-.781 1.375l-.406.813-3-.063-3.032-.062-.28.687c-.254.664-.828 2.925-1 3.907l-.095.5 2.625 1.437 2.625 1.438V31.843l-2.625 1.437-2.625 1.438.094.5c.142.804.724 3.043 1 3.843l.25.75 3.032-.062 3.03-.063.407.813c.23.444.593 1.067.781 1.375l.344.563-1.563 2.593-1.562 2.594 1.094 1.188c.99 1.083 2.455 2.437 2.625 2.437.036 0 1.22-.667 2.625-1.5l2.562-1.531.907.562c.509.298 1.12.638 1.343.75l.407.188-.032 3.031-.062 3.031.406.157c.61.233 2.61.787 3.594 1 .49.105.927.212.968.218.042.006.74-1.147 1.532-2.562L41.53 52h3.25l1.407 2.563 1.406 2.53.468-.062c.531-.054 3.224-.714 4.032-1l.531-.218V49.718l.406-.188a34.62 34.62 0 001.344-.75l.938-.562 2.53 1.531c1.389.834 2.569 1.5 2.657 1.5.218 0 3.594-3.402 3.594-3.625 0-.098-.674-1.31-1.5-2.688l-1.5-2.5.343-.562c.19-.308.521-.93.75-1.375l.407-.813 3.031.063 3.031.063.25-.75c.279-.807.862-3.05 1-3.844l.094-.5-2.625-1.438-2.594-1.437V28.688l2.594-1.438c1.434-.79 2.626-1.486 2.625-1.563-.003-.339-.7-3.127-1-4l-.344-.968-3.031.062-3.031.063-.407-.813a27.187 27.187 0 00-.75-1.375l-.343-.562 1.531-2.594 1.563-2.594-1.094-1.187c-1.19-1.302-2.515-2.48-2.688-2.406-.059.025-.752.39-1.531.843L57.469 11l-2.032 3-2.03 3 1.312 1.313c2.73 2.707 4.372 5.87 4.906 9.5.25 1.698.255 2.61.063 4.312-.827 7.3-6.285 13.15-13.563 14.531-1.445.274-4.406.267-5.938 0-4.784-.834-9.19-3.985-11.593-8.281-2.238-4.001-2.701-9.003-1.25-13.375a16.543 16.543 0 018.531-9.688c1.3-.626 3.525-1.374 4.094-1.374.347 0 .414-.224 1.062-2.938l.563-2.313-1.469-2.656-1.469-2.625zM10.094 40.5l-.5 1.563-.5 1.562-.906.375-.907.375-1.437-.656c-.79-.373-1.47-.688-1.532-.688-.062 0-.511.412-1 .907l-.906.874.719 1.407c.399.77.72 1.48.719 1.562-.003.082-.134.497-.313.938l-.344.812-1.562.563-1.563.562-.03 1.313L0 53.25l1.594.531 1.562.5.281.657c.49 1.1.477 1.206-.28 2.75l-.688 1.437.906.938.938.906 1.53-.75 1.5-.75.907.406.875.406.531 1.532.531 1.53h2.657l.469-1.562.5-1.531.874-.375.907-.406 1.562.718 1.532.72.906-.907.906-.906-.719-1.5-.75-1.5.313-.844c.171-.458.382-.872.468-.938.086-.065.812-.37 1.625-.656l1.5-.5-.03-1.312-.063-1.313-1.532-.5-1.562-.5-.344-.812c-.181-.447-.312-.877-.312-.969 0-.093.287-.803.656-1.594l.688-1.437-.938-.938-.938-.937-1.468.781-1.438.75L14.75 44l-.906-.344-.563-1.593-.594-1.563h-2.593zm1.375 7.844c3.332.002 4.877 4.028 2.406 6.25-.365.328-.92.66-1.219.75-1.975.592-4.071-.45-4.625-2.313-.283-.954-.27-1.484.063-2.375.54-1.443 1.834-2.313 3.375-2.312z"
          ></path>
        </svg>
      );
};

const TestingIcon = () => {
    return (
        <svg className={style.testing}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 73 73"
        >
          <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1">
            <g
              id={style['testing-container']}
              fill="#FFF"
              stroke="#293939"
              strokeWidth="2"
              transform="translate(2 2)"
              fillOpacity={0}
              strokeOpacity={0}
            >
              <rect width="71" height="71" x="-1" y="-1" rx="14"></rect>
            </g>
            <g transform="translate(15 15)">
              <path
                fill="#2C3B73"
                d="M44 6.531v24.492l-2.578 2.579H2.578L0 31.023V6.531c0-.722.567-1.289 1.29-1.289h41.42c.723 0 1.29.567 1.29 1.29z"
              ></path>
              <path
                fill="#293939"
                d="M44 6.531v24.492l-2.578 2.579H22V5.242h20.71c.723 0 1.29.567 1.29 1.29z"
              ></path>
              <path
                fill="#979FEF"
                d="M2.578 7.82H41.422000000000004V33.601H2.578z"
              ></path>
              <path fill="#737EE6" d="M22 7.82H41.422V33.601H22z"></path>
              <path
                fill="#EDF5FF"
                d="M36.18 1.29v31.023c0 .721-.567 1.289-1.29 1.289H9.11c-.723 0-1.29-.568-1.29-1.29V1.29C7.82.567 8.387 0 9.11 0h25.78c.723 0 1.29.567 1.29 1.29z"
              ></path>
              <path
                fill="#D7E9FF"
                d="M36.18 1.29v31.023c0 .721-.567 1.289-1.29 1.289H22V0h12.89c.723 0 1.29.567 1.29 1.29z"
              ></path>
              <path
                fill="#EDF5FF"
                d="M15.555 34.891H28.445999999999998V42.711H15.555z"
              ></path>
              <path fill="#D7E9FF" d="M22 34.891H28.445V42.711H22z"></path>
              <path
                fill="#D7E9FF"
                d="M33.602 42.71c0 .723-.568 1.29-1.29 1.29H11.689c-.722 0-1.29-.567-1.29-1.29 0-.721.568-1.288 1.29-1.288h20.624c.722 0 1.29.567 1.29 1.289z"
              ></path>
              <path
                fill="#979FEF"
                d="M16.844 11.688c-.33 0-.66-.126-.912-.378l-2.578-2.578a1.289 1.289 0 111.823-1.823l1.667 1.667L19.8 5.62a1.289 1.289 0 111.822 1.823l-3.867 3.867a1.285 1.285 0 01-.911.377zM16.844 19.422c-.33 0-.66-.126-.912-.378l-2.578-2.578a1.289 1.289 0 111.823-1.823l1.667 1.667 2.956-2.956a1.289 1.289 0 111.822 1.823l-3.867 3.867a1.285 1.285 0 01-.911.378zM16.844 27.156c-.33 0-.66-.126-.912-.377L13.354 24.2a1.289 1.289 0 111.823-1.822l1.667 1.666L19.8 21.09a1.289 1.289 0 111.822 1.822l-3.867 3.868a1.285 1.285 0 01-.911.377z"
              ></path>
              <path
                fill="#B0D5F7"
                d="M29.734 10.398h-5.156a1.288 1.288 0 110-2.578h5.156a1.288 1.288 0 110 2.578zM29.734 18.133h-5.156a1.288 1.288 0 110-2.578h5.156a1.288 1.288 0 110 2.578zM29.734 25.867h-5.156a1.288 1.288 0 110-2.578h5.156a1.288 1.288 0 110 2.578zM33.602 42.71c0 .723-.568 1.29-1.29 1.29H22v-2.578h10.313c.721 0 1.289.567 1.289 1.289z"
              ></path>
              <path
                fill="#D7E9FF"
                d="M44 31.023v3.868c0 .721-.567 1.289-1.29 1.289H1.29c-.723 0-1.29-.568-1.29-1.29v-3.867h44z"
              ></path>
              <path
                fill="#B0D5F7"
                d="M44 31.023v3.868c0 .721-.567 1.289-1.29 1.289H22v-5.157h22z"
              ></path>
            </g>
          </g>
        </svg>
    );
};

const FrontendIcon = () => {
    return (
        <svg className={style.frontend}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          width="100%"
          height="100%"
        >
          <circle id={style['frontend-circle']} cx="256" cy="256" r="256" fill="#E1E5EA" fillOpacity={0}></circle>
          <path d="M64 353.176V120.672c0-4.128 3.528-7.504 7.832-7.504H440.16c4.304 0 7.832 3.376 7.832 7.504v232.496H64v.008z"></path>
          <path
            fill="#636363"
            d="M448 353.176v32c0 4.4-3.528 8-7.832 8H71.832c-4.304 0-7.832-3.6-7.832-8v-32h384z"
          ></path>
          <path
            fill="#C9C9C9"
            d="M200 449.176L312 449.176 304 393.176 208 393.176z"
          ></path>
          <path
            fill="#AAA"
            d="M304 393.176L208 393.176 203.016 428.08 305.864 406.224z"
          ></path>
          <path fill="#636363" d="M172 449.2H340V457.2H172z"></path>
          <path
            fill="#939393"
            d="M208 393.176L304 393.176 304.544 396.96 205.512 410.624z"
          ></path>
          <path
            fill="#E1E5EA"
            fillOpacity={0}
            d="M110.84 34.992H401.15999999999997V109.912H110.84z"
          ></path>
          <path
            fill="#DB2B42"
            d="M110.84 146.48H242.552V221.39999999999998H110.84z"
          ></path>
          <path fill="#8AD5DD" d="M110.84 244.944H242.552V319.864H110.84z"></path>
          <path
            fill="#DB2B42"
            d="M269.448 146.48H401.15999999999997V221.39999999999998H269.448z"
          ></path>
          <path
            fill="#8AD5DD"
            d="M269.448 244.944H401.15999999999997V319.864H269.448z"
          ></path>
          <path d="M488.584 511.976H365.048c-4.08 0-7.416-3.336-7.416-7.416V272.312c0-4.08 3.336-7.416 7.416-7.416h123.536c4.08 0 7.416 3.336 7.416 7.416V504.56c0 4.08-3.336 7.416-7.416 7.416z"></path>
          <path d="M365.048 284.672H488.584V482.336H365.048z"></path>
          <g fill="#999">
            <path d="M441.512 277.256h-29.648a2.479 2.479 0 01-2.472-2.472 2.479 2.479 0 012.472-2.472h29.648a2.479 2.479 0 012.472 2.472 2.479 2.479 0 01-2.472 2.472zM441.64 497.152h-29.648a2.479 2.479 0 01-2.472-2.472 2.479 2.479 0 012.472-2.472h29.648a2.479 2.479 0 012.472 2.472 2.479 2.479 0 01-2.472 2.472z"></path>
          </g>
          <g fill="#DB2B42">
            <path d="M379.84 302.328H422.32V341.784H379.84z"></path>
            <path d="M431.296 302.328H473.776V341.784H431.296z"></path>
          </g>
          <g fill="#8AD5DD">
            <path d="M379.84 351.544H422.32V391H379.84z"></path>
            <path d="M431.296 351.544H473.776V391H431.296z"></path>
          </g>
          <g fill="#C9C9C9">
            <path d="M379.84 460.72H473.72799999999995V464.72H379.84z"></path>
            <path d="M379.84 444.984H473.72799999999995V448.984H379.84z"></path>
            <path d="M379.84 429.28H473.72799999999995V433.28H379.84z"></path>
            <path d="M379.84 413.584H473.72799999999995V417.584H379.84z"></path>
          </g>
        </svg>
    );
};

const BackendIcon = () => {
    return (
        <svg className={style.backend}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 24 24"
        >
          <g fill="#8C92A4">
            <path d="M6 13h12c1.886 0 2.828 0 3.414.586C22 14.172 22 15.114 22 17c0 1.886 0 2.828-.586 3.414C20.828 21 19.886 21 18 21H6c-1.886 0-2.828 0-3.414-.586C2 19.828 2 18.886 2 17c0-1.886 0-2.828.586-3.414C3.172 13 4.114 13 6 13zM6 3h12c1.886 0 2.828 0 3.414.586C22 4.172 22 5.114 22 7c0 1.886 0 2.828-.586 3.414C20.828 11 19.886 11 18 11H6c-1.886 0-2.828 0-3.414-.586C2 9.828 2 8.886 2 7c0-1.886 0-2.828.586-3.414C3.172 3 4.114 3 6 3z"></path>
          </g>
          <path
            fill="#1C274C"
            d="M12.75 7a.75.75 0 01.75-.75H18a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zM6 8.75A.75.75 0 015.25 8V6a.75.75 0 011.5 0v2a.75.75 0 01-.75.75zM9 8.75A.75.75 0 018.25 8V6a.75.75 0 011.5 0v2a.75.75 0 01-.75.75zM12.75 17a.75.75 0 01.75-.75H18a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zM6 18.75a.75.75 0 01-.75-.75v-2a.75.75 0 011.5 0v2a.75.75 0 01-.75.75zM9 18.75a.75.75 0 01-.75-.75v-2a.75.75 0 011.5 0v2a.75.75 0 01-.75.75z"
          ></path>
        </svg>
    );
};

export default Icon;