import typePrefix from 'state/helpers/type-prefix'

const prefix = typePrefix('projectMedia')

export const COPY_MEDIA_LINK = prefix('COPY_MEDIA_LINK')
export const FETCH_PROJECT_MEDIA = prefix('FETCH_PROJECT_MEDIA')
export const FETCH_PROJECT_MEDIA_COMPLETED = prefix('FETCH_PROJECT_MEDIA_COMPLETED')
export const FETCH_PROJECT_MEDIA_FAILED = prefix('FETCH_PROJECT_MEDIA_FAILED')
