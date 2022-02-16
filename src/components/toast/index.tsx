import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, View,  } from "react-native";
import { Text, Icon as EIcon } from "react-native-elements";
import { px_to_dp, screen_height, screen_width } from "../../utils/base";

type IiconType = 'success' | 'fail' | 'loading' | 'info';

interface IConfig{
  text:string;
  textStyle?:any;
  iconProps?:Record<string, any>;
  iconType?:IiconType;
  Icon?:any;
  duration?:number;
}

interface ITypeConfig{
  text:string;
  textStyle?:any;
  duration?:number;
}


const init_config = {
  text: '',
  duration: 2000
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: screen_height,
    width: screen_width,
    alignItems: 'center',
    justifyContent: 'center'
  },
  hide: {
    display: 'none'
  },
  box: {
    backgroundColor: 'rgba(0, 0, 0, .5)',
    padding: px_to_dp(10),
    minWidth: px_to_dp(150),
    borderRadius: px_to_dp(10),
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    lineHeight: px_to_dp(24),
    fontSize: px_to_dp(16),
    fontWeight: 'bold',
    color: 'white',
  }
})

interface IState{
  show: boolean,
  config: IConfig
}
let that: any;
export class Toast extends Component<any, IState> {
  private myTimer: any;
  constructor(props: any){
    super(props);
    that=this;
    this.state = {
      show: false,
      config: init_config
    }
  }

  componentDidUpdate(){
    const { show, config } = this.state;
    if(show){
      const delay = config.iconType === 'loading' ? 2 ** 31 - 1 : config.duration;
      this.myTimer && clearTimeout(this.myTimer);
      this.myTimer = setTimeout(() => {
        this.setState({
          show: false,
          config: init_config
        })
        clearTimeout(this.myTimer)
      }, delay)
    }
  }

  static show(config: IConfig, type: IiconType = 'info'){
    that.setState({
      show: true,
      config: {
        ...that.state.config,
        ...config,
        iconType: type
      }
    })
  }

  static loading(){
    Toast.show({ text: '' } , 'loading')
  }

  static success(config: ITypeConfig){
    Toast.show({...config}, 'success')
  }

  static fail(config: ITypeConfig){
    Toast.show({...config}, 'fail')
  }

  static hideLoading(){
    that.setState({
      show: false,
      config: init_config
    })
    clearTimeout(that.myTimer)
  }


  icon_type_rander = () => {
    const { config } = this.state;
    if(config.Icon) return;
    switch(config.iconType){
      case 'fail':
        return <EIcon name="cancel" tvParallaxProperties={undefined}  size={px_to_dp(30)} color='white' { ...config.iconProps }/>
      case 'success':
        return <EIcon name="check-circle" tvParallaxProperties={undefined}  size={px_to_dp(30)} color='white' { ...config.iconProps }/>
      case 'loading':
        return <ActivityIndicator color='white' size={ px_to_dp(30) } />
      default:
        return
    }
  }

  render(): React.ReactNode {
    const { show, config } = this.state;
    return (
      <View style={show ? styles.container : { ...styles.container, ...styles.hide }}>
        <View style={styles.box}>
          {this.icon_type_rander()}
          { config.Icon && <config.Icon /> }
          <Text style={{ ...styles.text, ...config.textStyle }} >{config.text}</Text>
        </View>
      </View>
    )
  }
}