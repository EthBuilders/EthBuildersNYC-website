import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, styled} from 'baseui';
import EthBuildersLogo from '../images/EthBuildersWhite.png'

const engine = new Styletron();

const About = () => {

    const Centered = styled('div', {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      });

    return (
        <>
        <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
        
        <Centered style={{paddingTop: '3%',}}>
            <h1>EthBuilders.NYC</h1>
        </Centered>
        
        <Centered>
        <div>
            <p>EthBuilder is a community for those interested 
            in discussing and participating in the research and
            development of Ethereum and related protocols.</p>
            <p>Everyone is welcomed!</p>
          </div>
        </Centered>

        <Centered>
        <img src={EthBuildersLogo} alt="group logo" />
        </Centered>

        </BaseProvider>
        </StyletronProvider>
        </>
    )
}

export default About
