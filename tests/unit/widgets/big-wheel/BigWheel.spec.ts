import { mount, VueWrapper } from '@vue/test-utils';
import BigWheel from '@/widgets/big-wheel/BigWheel.vue';
import prizeData from '@/date/prizeData.json';

describe('big-wheel 部件', () => {
  let wrapper: VueWrapper<any>;

  beforeAll(() => {
    wrapper = mount(BigWheel);
  });

  it('加载', () => {
    expect(wrapper.find('.big-wheel-widget').exists()).toBeTruthy();
  });

  it('正方形转盘，背景是给定的图片', () => {
    const platePic = 'asd.png';
    wrapper.setProps({
      plate: platePic,
    }).then(() => {
      const plate = wrapper.find('.plate');
      expect(plate.exists()).toBeTruthy();
      const { style } = plate.attributes();
      const styles: any = {};
      style.split('; ').forEach((kv: string) => {
        const [k, v] = kv.split(': ');
        styles[k] = v;
      });
      console.log(style);
      console.log(styles);
      // const { width, height, backgroundImage } = plate.attributes().style;
      expect(styles.width).toBe(styles.height);
      expect(styles['background-image']).toEqual(`url(${platePic});`);
      // expect(plate.find('img').attributes().src).toEqual(platePic);
    });
  });

  it('绘制奖品', () => {
    wrapper.setProps({
      prizes: prizeData,
    });
    expect(wrapper.findAll(',przie').length).toBe(prizeData.length);
  });
});
