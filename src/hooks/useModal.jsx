import { modal } from 'vxe-table'

function useModalSize(size) {
  const small = { width: '30vw', maxHeight: '60vh' }
  const _default = { width: '40vw', maxHeight: '65vh' }
  const large = { width: '50vw', maxHeight: '70vh' }
  switch (size) {
    case 'small':
      return small
    case 'default':
      return _default
    case 'large':
      return large
    default:
      return _default
  }
}

let modalId = 0

export default function useModal(slots = {}, extData, props = {}) {

  console.log(modal)

  let dataCallback = null
  const subscribe = (fn) => {
    dataCallback = fn
  }

  const data = ref(null)
  const setData = (newData) => {
    dataCallback?.(newData)
    data.value = newData
  };

  const { size, ...newProps } = props

  const newSlots = {
    default: (context) => <div style={ useModalSize(size) }>
      { slots?.default?.({ modal: context.$modal, emit: setData, extData: extData }) }
    </div>,
    title: (context) => [<span>{ slots?.title }</span>],
    footer: (context) => slots?.footer?.({ modal: context.$modal, emit: setData, extData: extData }),
  }

  const opts = {
    id: '' + ++modalId,
    showFooter: true,
    mask: true,
    escClosable: true,
    showZoom: true,
    resize: true,
    width: 'auto',
    ...newProps,
    slots: newSlots,
  }
  const test = modal.open(opts)
  console.log('opts ', opts)
  window.$modal = modal
  console.log('opts.id ', opts.id)
  console.log('modal.get ', modal.get(opts.id))

  return {
    data: readonly(data),
    then: subscribe,
  }
}
