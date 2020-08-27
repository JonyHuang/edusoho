(window.webpackJsonp=window.webpackJsonp||[]).push([["brush"],{"3b28":function(e,s,t){"use strict";t.r(s),t("a481"),t("c5f6");var a=t("3ce7"),r=t("faa5"),n={components:{},data:function(){return{isLoading:!0,assessment:{},answerScene:{},answerReport:{},answerRecord:{},height:0}},computed:{usedTime:function(){return this.answerRecord.used_time/60},isReadOver:function(){return"reviewing"===this.answerRecord.status},needScore:function(){return!!Number(this.answerScene.need_score)}},watch:{},created:function(){this.getData()},methods:{getheight:function(){var e=document.body.clientHeight-46;return document.body.scrollHeight-46>e?document.body.scrollHeight:e},getData:function(){var e=this,s={answerRecordId:Number(this.$route.params.answerRecordId)};a.a.answerRecord({query:s}).then((function(s){e.assessment=s.assessment,e.answerScene=s.answer_scene,e.answerReport=s.answer_report,e.answerRecord=s.answer_record,e.$store.commit(r.s,e.$route.query.title),e.isLoading=!1,e.$nextTick((function(){e.height=e.getheight()}))})).catch((function(s){e.isLoading=!1,e.$toast(s.message)}))},doReview:function(){var e={title:this.$route.query.title,type:this.$route.query.type,exerciseId:this.$route.query.exerciseId,assessmentId:this.$route.query.assessmentId,moduleId:this.$route.query.moduleId,categoryId:this.$route.query.categoryId},s=this.$route.params.answerRecordId;this.$router.push({path:"/brushReview/".concat(s),query:e})},doAgain:function(){var e=this.$route.query.type,s={mode:"start",title:this.$route.query.title,type:this.$route.query.type,exerciseId:this.$route.query.exerciseId,moduleId:this.$route.query.moduleId};"chapter"===e?s.categoryId=this.$route.query.categoryId:s.assessmentId=this.$route.query.assessmentId,this.$router.replace({path:"/brushDo",query:s})},doAnalysis:function(){var e={title:this.$route.query.title},s=this.$route.params.answerRecordId;this.$router.push({path:"/brushReport/".concat(s),query:e})}}},i=t("a6c2"),o=Object(i.a)(n,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"item-bank-result brush-exercise-report",style:{height:e.height+"px"}},[e.isLoading?t("e-loading"):e._e(),e.isReadOver?t("div",{staticClass:"notify"},[e._v("\n    ※请参考题目解析，对主观题自行估分批阅。\n  ")]):e._e(),t("div",{staticClass:"item-bank-result_content"},[e.isReadOver?t("div",{staticClass:"exercise-report-status"},[t("img",{attrs:{src:"static/images/report-review.png"}}),t("p",{staticClass:"result-text result-status_fail mt20"},[e._v("正在批阅中")])]):e._e(),t("div",{directives:[{name:"show",rawName:"v-show",value:e.needScore,expression:"needScore"}],staticClass:"result-score"},[e._v("\n      分数：\n      "),e.isReadOver?t("span",{staticClass:"result-status_fail"},[e._v("?")]):t("span",[e._v(e._s(e.answerReport.score)+"分")])]),t("div",{staticClass:"result-content"},[t("div",{staticClass:"result-content-item result-section-title"},[t("span",[e._v("题型")]),t("span",[e._v("答对题")]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.needScore,expression:"needScore"}]},[e._v("总分")])]),e._l(e.answerReport.section_reports,(function(s,a){return t("div",{key:a,staticClass:"result-content-item"},[t("span",[e._v(e._s(s.section_name))]),t("span",[t("i",{staticClass:"color-primary"},[e._v(e._s(s.right_question_num))]),e._v("\n          / "+e._s(s.question_count)+"\n        ")]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.needScore,expression:"needScore"}],staticClass:"color-primary"},[s.reviewing_question_num>0&&e.isReadOver?t("i",{staticClass:"result-status_fail"},[e._v("?\n          ")]):t("i",[e._v(e._s(s.score))])])])}))],2),t("div",{staticClass:"result-footer"},[e.isReadOver?t("div",{staticClass:"result-footer__btn",on:{click:e.doReview}},[e._v("\n        开始批阅\n      ")]):[t("div",{staticClass:"result-footer__btn result-footer__btn-border",on:{click:e.doAgain}},[e._v("\n          再次答题\n        ")]),t("div",{staticClass:"result-footer__btn",on:{click:e.doAnalysis}},[e._v("查看解析")])]],2)])],1)}),[],!1,null,null,null);s.default=o.exports},"8d5b":function(e,s,t){"use strict";t.r(s),t("e7e5");var a=t("d399"),r=(t("c5f6"),t("3ce7")),n=t("faa5"),i={components:{},data:function(){return{isLoading:!0,assessment:{},answerScene:{},answerReport:{},answerRecord:{}}},computed:{},watch:{},created:function(){this.getData()},methods:{getData:function(){var e=this,s={answerRecordId:Number(this.$route.params.answerRecordId)};r.a.answerRecord({query:s}).then((function(s){e.assessment=s.assessment,e.answerScene=s.answer_scene,e.answerReport=s.answer_report,e.answerRecord=s.answer_record,e.$store.commit(n.s,e.$route.query.title),e.isLoading=!1})).catch((function(s){e.isLoading=!1,e.$toast(s.message)}))},getReviewData:function(e){var s=this;a.a.loading({message:"提交中...",forbidClick:!0});var t={exerciseId:this.$route.query.exerciseId};r.a.pushItemBankReviewReport({query:t,data:e}).then((function(e){a.a.clear(),s.goResult(e)})).catch((function(e){a.a.clear(),s.$toast(e.message)}))},goResult:function(e){this.$router.go(-1)}}},o=t("a6c2"),c=Object(o.a)(i,(function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"item-bank-review ibs-wap-vue"},[this.isLoading?s("e-loading"):s("item-review",{attrs:{answerRecord:this.answerRecord,answerReport:this.answerReport,assessment:this.assessment,answerScene:this.answerScene},on:{getReviewData:this.getReviewData}})],1)}),[],!1,null,null,null);s.default=c.exports},c94b:function(e,s,t){"use strict";t.r(s),t("a481"),t("e7e5");var a=t("d399"),r=t("3ce7"),n=t("faa5"),i={assessment:{api:"getAssessmentExerciseRecord"},chapter:{api:"getChapterExerciseRecord"}},o={components:{},data:function(){return{isLoading:!0,assessment:{},answerScene:{},answerRecord:{},assessmentResponse:{},canLeave:!1}},computed:{},watch:{},created:function(){"start"===this.$route.query.mode?this.getStart():this.getContinue()},mounted:function(){},beforeRouteLeave:function(e,s,t){this.canLeave?t():this.$refs.itemEngine.submitPaper(!0)},methods:{getContinue:function(){var e=this;this.isLoading=!0;var s={answer_record_id:this.$route.query.answer_record_id};r.a.continueAnswer({data:s}).then((function(s){e.assignData(s),e.isLoading=!1})).catch((function(s){e.isLoading=!1,e.$toast(s.message)}))},getStart:function(){var e=this;this.isLoading=!0;var s=this.$route.query.type,t={exerciseId:this.$route.query.exerciseId},a={moduleId:this.$route.query.moduleId};"assessment"===s?a.assessmentId=this.$route.query.assessmentId:a.categoryId=this.$route.query.categoryId,r.a[i[s].api]({query:t,data:a}).then((function(s){e.isLoading=!1,e.assignData(s)})).catch((function(s){e.isLoading=!1,e.$toast(s.message)}))},assignData:function(e){this.$store.commit(n.s,this.$route.query.title),this.assessment=e.assessment,this.answerScene=e.answer_scene,this.answerRecord=e.answer_record,this.assessmentResponse=e.assessment_response},saveAnswerData:function(e){var s=this;a.a.loading({message:"保存中...",forbidClick:!0}),r.a.saveAnswer({data:e}).then((function(e){a.a.clear(),s.canLeave=!0;var t=s.$route.query.exerciseId;s.$router.replace({path:"/item_bank_exercise/".concat(t)})})).catch((function(e){a.a.clear(),s.$toast(e.message)}))},getAnswerData:function(e){var s=this;a.a.loading({message:"提交中...",forbidClick:!0}),r.a.submitAnswer({data:e}).then((function(e){a.a.clear(),s.canLeave=!0,s.goResult()})).catch((function(e){a.a.clear(),s.$toast(e.message)}))},timeSaveAnswerData:function(e){var s=this;r.a.saveAnswer({data:e}).then((function(e){})).catch((function(e){s.$toast(e.message)}))},goResult:function(){var e={title:this.$route.query.title,type:this.$route.query.type,exerciseId:this.$route.query.exerciseId,assessmentId:this.$route.query.assessmentId,moduleId:this.$route.query.moduleId,categoryId:this.$route.query.categoryId},s=this.assessmentResponse.answer_record_id;this.$router.replace({path:"/brushResult/".concat(s),query:e})}}},c=t("a6c2"),u=Object(c.a)(o,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[e.isLoading?t("e-loading"):t("div",{staticClass:"ibs-wap-vue"},[t("item-engine",{ref:"itemEngine",attrs:{answerRecord:e.answerRecord,assessmentResponse:e.assessmentResponse,assessment:e.assessment,answerScene:e.answerScene},on:{saveAnswerData:e.saveAnswerData,getAnswerData:e.getAnswerData,timeSaveAnswerData:e.timeSaveAnswerData}})],1)],1)}),[],!1,null,null,null);s.default=u.exports},cf57:function(e,s,t){"use strict";t.r(s),t("c5f6");var a=t("3ce7"),r=t("faa5"),n={components:{},data:function(){return{isLoading:!0,assessment:{},answerScene:{},answerReport:{},answerRecord:{}}},computed:{},watch:{},created:function(){this.getData()},methods:{getData:function(){var e=this,s={answerRecordId:Number(this.$route.params.answerRecordId)};a.a.answerRecord({query:s}).then((function(s){e.$store.commit(r.s,e.$route.query.title),e.assessment=s.assessment,e.answerScene=s.answer_scene,e.answerReport=s.answer_report,e.answerRecord=s.answer_record,e.isLoading=!1})).catch((function(s){e.isLoading=!1,e.$toast(s.message)}))}}},i=t("a6c2"),o=Object(i.a)(n,(function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"brush-exercise-report"},[this.isLoading?s("e-loading"):[s("div",{staticClass:"ibs-wap-vue"},[s("item-report",{attrs:{answerRecord:this.answerRecord,answerReport:this.answerReport,assessment:this.assessment,answerScene:this.answerScene}})],1)]],2)}),[],!1,null,null,null);s.default=o.exports}}]);