import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HomeIcon from '@mui/icons-material/Home';
import VideocamIcon from '@mui/icons-material/Videocam';
import LensBlurIcon from '@mui/icons-material/LensBlur';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import UploadIcon from '@mui/icons-material/Upload';
import { getContent } from '@/app/locales';
import { ProcessButton } from './Process.client';

const stepIcons = [VideocamIcon, LensBlurIcon, PrecisionManufacturingIcon, UploadIcon];

// Le SVG waveform est identique pour chaque étape, on le sort du JSX pour éviter la répétition
const Waveform = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={className}>
        <path d="M0,224L6.2,186.7C12.3,149,25,75,37,53.3C49.2,32,62,64,74,106.7C86.2,149,98,203,111,197.3C123.1,192,135,128,148,101.3C160,75,172,85,185,122.7C196.9,160,209,224,222,250.7C233.8,277,246,267,258,250.7C270.8,235,283,213,295,202.7C307.7,192,320,192,332,181.3C344.6,171,357,149,369,144C381.5,139,394,149,406,133.3C418.5,117,431,75,443,53.3C455.4,32,468,32,480,42.7C492.3,53,505,75,517,96C529.2,117,542,139,554,165.3C566.2,192,578,224,591,208C603.1,192,615,128,628,122.7C640,117,652,171,665,181.3C676.9,192,689,160,702,165.3C713.8,171,726,213,738,202.7C750.8,192,763,128,775,112C787.7,96,800,128,812,117.3C824.6,107,837,53,849,64C861.5,75,874,149,886,202.7C898.5,256,911,288,923,282.7C935.4,277,948,235,960,229.3C972.3,224,985,256,997,229.3C1009.2,203,1022,117,1034,90.7C1046.2,64,1058,96,1071,96C1083.1,96,1095,64,1108,48C1120,32,1132,32,1145,74.7C1156.9,117,1169,203,1182,218.7C1193.8,235,1206,181,1218,149.3C1230.8,117,1243,107,1255,101.3C1267.7,96,1280,96,1292,85.3C1304.6,75,1317,53,1329,69.3C1341.5,85,1354,139,1366,149.3C1378.5,160,1391,128,1403,133.3C1415.4,139,1428,181,1434,202.7L1440,224L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path>
    </svg>
);

export default function Process({ lang = 'en' }) {
    const { process, common } = getContent(lang);
    const steps = ['step1', 'step2', 'step3', 'step4'];

    return (
        <section className="process-section" id="process">
            <div className="process-top">
                <div className="eyebrow">
                    <HomeIcon/>
                    <ArrowForwardIosIcon/>
                    <span>{process.eyebrow}</span>
                </div>
                <h2 className="process-title">
                    <i>{process.titleHighlight}</i> <br /> {process.titleRest}
                </h2>
                <ProcessButton label={common.bookSession} />
            </div>
            <div className="process-timeline">
                {steps.map((step, idx) => {
                    const Icon = stepIcons[idx];
                    const s = process.steps[step];
                    return (
                        <div className="layer" key={step}>
                            <div className="bloc">
                                <Icon className="icon"/>
                                <hr />
                                <div className="pop">
                                    <h3>{s.title}</h3>
                                    <p>{s.description}</p>
                                </div>
                                <Waveform className="waveform" />
                                <Waveform className="waveform2" />
                                <Waveform className="waveform3" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}