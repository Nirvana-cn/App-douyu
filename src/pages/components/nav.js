import React from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import Grid from './recommend/Grid'
import Carousel from './recommend/Carousel'
import CarouselColumn from './recommend/Carousel_column'
import { TabBar } from 'antd-mobile';
import collect from '../../assets/collect.svg';
import collectSelected from '../../assets/collect-selected.svg'
import video from '../../assets/video.svg';
import videoSelected from '../../assets/video-selected.svg'
import chat from '../../assets/chat.svg';
import chatSelected from '../../assets/chat-selected.svg'
import VideoCard from './card/index'
import Guess from './recommend/Guess'

export default class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tabOne',
      hidden: false,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
           onClick={(e) => {
             e.preventDefault();
             this.setState({
               hidden: !this.state.hidden,
             });
           }}
        >
          Click to show/hide tab-bar
        </a>
      </div>
    );
  }

  render() {
    return (
      <div style={{ position: 'absolute', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#E85529"
          barTintColor="white"
          tabBarPosition="bottom"
          hidden={this.state.hidden}
          prerenderingSiblingsNumber={0}
        >
          <TabBar.Item
            title="推荐"
            key="推荐"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${video}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${videoSelected}) center center /  21px 21px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'tabOne'}
            onPress={() => {
              this.setState({
                selectedTab: 'tabOne',
              });
            }}
            data-seed="logId"
          >
            <Carousel></Carousel>
            <Grid></Grid>
            <CarouselColumn></CarouselColumn>
            <Guess></Guess>
            <VideoCard></VideoCard>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${collect}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${collectSelected}) center center /  21px 21px no-repeat` }}
              />
            }
            title="关注"
            key="关注"
            selected={this.state.selectedTab === 'tabTwo'}
            onPress={() => {
              this.setState({
                selectedTab: 'tabTwo',
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent('Koubei')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${chat}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${chatSelected}) center center /  21px 21px no-repeat` }}
              />
            }
            title="聊吧"
            key="聊吧"
            dot
            selected={this.state.selectedTab === 'tabThree'}
            onPress={() => {
              this.setState({
                selectedTab: 'tabThree',
              });
            }}
          >
            {this.renderContent('Friend')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${collect}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${collectSelected}) center center /  21px 21px no-repeat` }}
              />
            }
            title="发现"
            key="发现"
            selected={this.state.selectedTab === 'tabFour'}
            onPress={() => {
              this.setState({
                selectedTab: 'tabFour',
              });
            }}
          >
            {this.renderContent('My')}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
