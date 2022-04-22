import {
  copyToClipboard,
  Notify,
  scroll
} from 'quasar'

function copy (text) {
  copyToClipboard(text)
    .then(() => {
      Notify.create({
        message: 'Copied!',
        icon: 'mdi-clipboard-check',
        color: 'grad-mint',
        classes: 'text-body1 font-pangolin text-navy-blue'
      })
    }).catch(() => {
      Notify.create({
        message: 'Can\'t copy to clipboard',
        icon: 'mdi-clipboard-off',
        color: 'grad-red',
        classes: 'text-body1 font-pangolin'
      })
    })
}

function smoothScrollTo (id, document) {
  const { getScrollTarget, setVerticalScrollPosition } = scroll
  const el = document.getElementById(id)
  const target = getScrollTarget(el)
  const offset = el.offsetTop
  setVerticalScrollPosition(target, offset, 500)
}

export { copy, smoothScrollTo }
