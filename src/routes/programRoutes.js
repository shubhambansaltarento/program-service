const programService = require('../service/programService');
const userProgramPreference = require('../service/userProgramPreference');
const formConfig = require('../service/formConfig');
const userService = require('../service/userService');

const requestMiddleware = require('../middlewares/request.middleware')

const BASE_URL = '/program/v1'

module.exports = function (app) {
  app.route(BASE_URL + '/read/:program_id')
    .get(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      programService.getProgramAPI)

  app.route(BASE_URL + '/create')
    .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      programService.createProgramAPI)

  app.route(BASE_URL + '/update')
    .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      programService.updateProgramAPI)

  app.route(BASE_URL + '/publish')
    .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      programService.publishProgramAPI)

  app.route(BASE_URL + '/unlist/publish')
  .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
    programService.publishProgramAPI)

  app.route(BASE_URL + '/delete')
    .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      programService.deleteProgramAPI)

  app.route(BASE_URL + '/list')
    .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      programService.programListAPI)

  app.route(BASE_URL + '/list/download')
    .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      programService.downloadProgramDetailsAPI)

  app.route(BASE_URL + '/report')
    .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      programService.generateApprovedContentReportAPI)

  app.route(BASE_URL + '/search')
    .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      programService.programSearchAPI)

  app.route(BASE_URL + '/nomination/add')
    .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      programService.addNominationAPI)

  app.route(BASE_URL + '/nomination/update')
    .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      programService.updateNominationAPI)

  app.route(BASE_URL + '/nomination/remove')
    .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      programService.removeNominationAPI)

  app.route(BASE_URL + '/nomination/list')
    .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      programService.nominationsListAPI)

  app.route(BASE_URL + '/nomination/list/download')
    .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      programService.downloadNominationListAPI)

  app.route(BASE_URL + '/collection/link')
    .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      programService.programUpdateCollectionAPI)

  app.route(BASE_URL + '/contenttypes/list')
    .get(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      programService.programGetContentTypesAPI)

  app.route(BASE_URL + '/health')
    .get(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      programService.healthAPI)

  app.route(BASE_URL + '/users/:user_id')
    .get(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      programService.getUserDetailsAPI)

  app.route(BASE_URL + '/contributor/search')
    .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      programService.contributorSearchAPI)

  app.route(BASE_URL + '/collection/copy')
    .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      programService.programCopyCollectionAPI)

  app.route(BASE_URL + '/configuration/list')
    .get(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      programService.getAllConfigurationsAPI)

  app.route(BASE_URL + '/configuration/search')
    .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      programService.getConfigurationByKeyAPI)

  app.route(BASE_URL + '/content/publish')
    .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      programService.publishContentAPI)

  app.route(BASE_URL + '/tenant/list')
    .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      programService.programCountsByOrgAPI)

  app.route(BASE_URL + '/sync/registry')
    .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      programService.syncUsersToRegistry)

  app.route(BASE_URL + '/preference/create')
    .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      userProgramPreference.setUserPreferences)

  app.route(BASE_URL + '/preference/update')
    .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      userProgramPreference.setUserPreferences)

  app.route(BASE_URL + '/preference/read')
    .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      userProgramPreference.getUserPreferences)

      app.route(BASE_URL + '/form/create')
      .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      formConfig.createForm)

    app.route(BASE_URL + '/form/update')
      .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      formConfig.updateForm)

    app.route(BASE_URL + '/form/read')
      .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
      formConfig.getForm)
    
    app.route(BASE_URL + '/user/:userId')
      .delete(requestMiddleware.createAndValidateRequestBody,
      userService.deleteUser)
}