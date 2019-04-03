import { mount } from "@vue/test-utils";
import ClassmateItem from "@/components/ClassmateItem.vue";

describe("ClassmateItem.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = mount(ClassmateItem, {
      propsData: {
        classmate: [
          {
            id: 100002157118009,
            name: "Alexander Shved",
            location: "Bristol",
            country: "United Kingdom",
            birthday: "1990-04-15",
            mobile: "+447871792047",
            social: {
              twitter: "https://twitter.com/Shved_90",
              vkontakte: "https://vk.com/a.shved90"
            }
          },
          {
            id: 100002032335722,
            name: "Anna Maslovska",
            location: "Newmarket",
            country: "United Kingdom",
            birthday: "1990-06-03"
          }
        ]
      }
    });
    wrapper.vm.coverImgUrl(wrapper[0].classmate.name);
    wrapper.vm.profileImgUrl(wrapper[0].classmate.name);
    expect(wrapper[0].coverImgUrl(wrapper[0].classmate.name)).toBe(
      "../assets/classmates/shvedCover.jpg"
    );
  });
});
