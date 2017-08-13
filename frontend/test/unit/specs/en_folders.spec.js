mport Vue from 'vue'
import en_folders from '@/components/en_folders'

describe('test en_folders.vue', () => {
	it('测试邮箱输入不合法时是否能够标记', () => {
		const Constructor = Vue.extend(en_folders)
    const vm = new Constructor().$mount()
    const input = vm.$el.querySelector('#input-email')
    const clickEvent = new window.Event('blur')
    input.dispatchEvent(clickEvent)
    vm.email = '1'
    vm._watcher.run()
    expect(vm.emailIllegal)
      .to.be.ok
	})
	it('测试正在输入邮箱时是否能取消不合法标记', () => {
		const Constructor = Vue.extend(en_folders)
    const vm = new Constructor().$mount()
    const input = vm.$el.querySelector('#input-email')
    const clickEvent = new window.Event('focus')
    input.dispatchEvent(clickEvent)
    vm.vm.email = '1'
    vm.checkEmail()
    vm._watcher.run()
    expect(vm.emailIllegal)
      .to.not.be.ok
	})
	it('测试密码输入不合法时是否能够标记', () => {
		const Constructor = Vue.extend(en_folders)
    const vm = new Constructor().$mount()
    const input = vm.$el.querySelector('#input-password')
    const clickEvent = new window.Event('blur')
    input.dispatchEvent(clickEvent)
    vm.password = '1'
    vm._watcher.run()
    expect(vm.passwordNonStandard)
      .to.be.ok
	})
	it('测试密码输入不一致时是否能够标记', () => {
		const Constructor = Vue.extend(en_folders)
    const vm = new Constructor().$mount()
    const input = vm.$el.querySelector('#input-password-confirm')
    const clickEvent = new window.Event('blur')
    input.dispatchEvent(clickEvent)
    vm.password = '123Abc'
    vm.passwordConfirm = '223Abc'
    vm._watcher.run()
    expect(vm.passwordInConsistent)
      .to.be.ok
	})
	it('测试正在输入密码时是否能取消不一致标记', () => {
		const Constructor = Vue.extend(en_folders)
    const vm = new Constructor().$mount()
    const input = vm.$el.querySelector('#input-password-confirm')
    const clickEvent = new window.Event('focus')
    input.dispatchEvent(clickEvent)
    vm.password = '123Abc'
    vm.passwordConfirm = '223Abc'
    vm.checkPassword()
    vm._watcher.run()
    expect(vm.passwordInConsistent)
      .to.not.be.ok
	})
	it('测试正在输入密码时是否能取消不合法标记', () => {
		const Constructor = Vue.extend(en_folders)
    const vm = new Constructor().$mount()
    const input = vm.$el.querySelector('#input-password')
    const clickEvent = new window.Event('focus')
    input.dispatchEvent(clickEvent)
    vm.password = '123abc'
    vm.checkPassword()
    vm._watcher.run()
    expect(vm.passwordNonStandard)
      .to.not.be.ok
	})
	it('测试正在输入正确时是否能正确赋值', () => {
		const Constructor = Vue.extend(en_folders)
    const vm = new Constructor().$mount()
    const button = vm.$el.querySelector('#finish')
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    vm.email = '1@1.com'
    vm.password = '123Abc'
    vm.passwordConfirm = '123Abc'
    vm.nickname = 'abc'
    vm.serialNumber = 's1'
    vm.checkEmail()
    vm.checkPassword()
    vm._watcher.run()
    expect(vm.item.nickname)
      .to.be.equal('abc')
	})
	it('测试正在输入有空时是否能不赋值', () => {
		const Constructor = Vue.extend(en_folders)
    const vm = new Constructor().$mount()
    const button = vm.$el.querySelector('#finish')
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    vm.email = '1@1.com'
    vm.password = '123Abc'
    vm.passwordConfirm = '123Abc'
    vm.nickname = 'abc'
    vm.serialNumber = ''
    vm.checkEmail()
    vm.checkPassword()
    vm._watcher.run()
    expect(vm.item)
      .to.be.empty
	})
	it('测试正在邮箱输入不合法时是否能不赋值', () => {
		const Constructor = Vue.extend(en_folders)
    const vm = new Constructor().$mount()
    const button = vm.$el.querySelector('#finish')
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    vm.email = '1@com'
    vm.password = '123Abc'
    vm.passwordConfirm = '123Abc'
    vm.nickname = 'abc'
    vm.serialNumber = 's1'
    vm.checkEmail()
    vm.checkPassword()
    vm._watcher.run()
    expect(vm.item)
      .to.be.empty
	})
	it('测试正在密码输入不合法时是否能不赋值', () => {
		const Constructor = Vue.extend(en_folders)
    const vm = new Constructor().$mount()
    const button = vm.$el.querySelector('#finish')
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    vm.password = '123abc'
    vm.passwordConfirm = '123abc'
    vm.nickname = 'abc'
    vm.serialNumber = 's1'
    vm.checkEmail()
    vm.checkPassword()
    vm._watcher.run()
    expect(vm.item)
      .to.be.empty
	})
	it('测试正在密码输入不一致时是否能不赋值', () => {
		const Constructor = Vue.extend(en_folders)
    const vm = new Constructor().$mount()
    const button = vm.$el.querySelector('#finish')
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    vm.password = '123Abc'
    vm.passwordConfirm = '123ABc'
    vm.nickname = 'abc'
    vm.serialNumber = 's1'
    vm.checkEmail()
    vm.checkPassword()
    vm._watcher.run()
    expect(vm.item)
      .to.be.empty
	})
})