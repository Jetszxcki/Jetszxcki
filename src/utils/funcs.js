import { copyToClipboard, Notify } from 'quasar'

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

export { copy }
